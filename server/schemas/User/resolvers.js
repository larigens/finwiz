const { GraphQLError } = require('graphql');
const { User, Carrier } = require('../../models');
const { signToken } = require('../../utils/auth');

const resolvers = {
    Query: {
        user: async (_, { userId }) => {
            try {
                const user = await User.findOne({ _id: userId });
                return user;
            } catch (err) {
                console.log(err);
                throw new Error(`Error retrieving user: ${err.message}`);
            }
        },
        users: async () => {
            try {
                const users = await User.find();
                return users;
            } catch (err) {
                console.log(err);
                throw new Error(`Error retrieving users: ${err.message}`);
            }
        },
        // By adding context to our query, we can retrieve the logged in user without specifically searching for them
        me: async (_, args, context) => {
            // Retrieves the logged-in user from the 'context' object
            if (context.user) {
                const user = User.findOne({ _id: context.user._id });
                return user;
            }
            throw new GraphQLError('You need to be logged in!');
        },
    },
    Mutation: {
        addUser: async (_, { firstName, lastName, username, email, password, role }) => {
                try {
                    const user = await User.create({ firstName, lastName, username, email, password, role });
                    const token = signToken(user);
                    return { token, user };
                } catch (err) {
                    console.log(err);
                    throw new Error(`Error adding user: ${err.message}`);
                }
        },
        loginUser: async (_, { username, password }) => {
            try {
                const user = await User.findOne({ username });

                if (!user) {
                    throw new GraphQLError('Invalid username or password!');
                }

                const correctPw = await user.validatePassword(password);

                if (!correctPw) {
                    throw new GraphQLError('Invalid username or password!');
                }

                const token = signToken(user);
                return { token, user };
            } catch (err) {
                console.log(err);
                throw new Error(`Error logging user: ${err.message}`);
            }
        },
        // Add context later
        addUserCarrier: async (_, { userId, carrierId }) => {
            try {
                const user = await User.findOne({ _id: userId });

                if (!user) {
                    throw new Error(`User with ID ${userId} not found`);
                }

                if (user.role !== 'Employee') {
                    throw new Error(`User with ID ${userId} is not an employee`);
                }

                const carrier = await Carrier.findOne({ _id: carrierId });

                if (!carrier) {
                    throw new Error(`Carrier with ID ${carrierId} not found`);
                }

                user.employeeProperty.carriers.push(carrier);

                const updatedUser = await user.save();

                return updatedUser.employeeProperty;
            } catch (error) {
                console.error(error);
                throw new Error(`Error adding user-carrier relationship: ${err.message}`);
            }
        },
        updateUser: async (_, { userId, input }, context) => {
            if (context.user && context.user.role === 'Admin') {
                try {
                    const user = await User.findOneAndUpdate(
                        { _id: userId },
                        { $set: input },
                        { new: true, runValidators: true }
                    );
                    return user;
                } catch (err) {
                    console.log(err);
                    throw new Error(`Error updating user: ${err.message}`);
                }
            }
            throw new GraphQLError('Access denied!');
        },
        removeUser: async (_, { userId }, context) => {
            if (context.user && context.user.role === 'Admin') {
                try {
                    return User.findOneAndDelete({ _id: userId });
                } catch (err) {
                    console.log(err);
                    throw new Error(`Error removing user: ${err.message}`);
                }
            }
            throw new GraphQLError('Access denied!');
        },
    },
};

module.exports = resolvers;
