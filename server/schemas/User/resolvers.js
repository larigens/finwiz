const { AuthenticationError } = require('apollo-server-express');
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
                throw new Error('Failed to fetch user.');
            }
        },
        users: async () => {
            try {
                const users = await User.find();
                return users;
            } catch (err) {
                console.log(err);
                throw new Error('Failed to fetch users.');
            }
        },
        // By adding context to our query, we can retrieve the logged in user without specifically searching for them
        me: async (_, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        addUser: async (_, { input }, context) => {
            if (context.user && context.user.role === 'Admin') {
                try {
                    const user = await User.create(input);
                    const token = signToken(user);
                    return { token, user };
                } catch (err) {
                    console.log(err);
                    throw new Error('Failed to add user.');
                }
            }
            throw new AuthenticationError('Access denied!');
        },
        loginUser: async (_, { username, password }) => {
            try {
                const user = await User.findOne({ username });

                if (!user) {
                    throw new AuthenticationError('Invalid username or password!');
                }

                const correctPw = await user.validatePassword(password);

                if (!correctPw) {
                    throw new AuthenticationError('Invalid username or password!');
                }

                const token = signToken(user);
                return { token, user };
            } catch (err) {
                console.log(err);
                throw new Error('Failed to login.');
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
                throw new Error('Failed to add carrier');
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
                    throw new Error('Failed to update user.');
                }
            }
            throw new AuthenticationError('Access denied!');
        },
        removeUser: async (_, { userId }, context) => {
            if (context.user && context.user.role === 'Admin') {
                try {
                    return User.findOneAndDelete({ _id: userId });
                } catch (err) {
                    console.log(err);
                    throw new Error('Failed to remove user.');
                }
            }
            throw new AuthenticationError('Access denied!');
        },
    },
};

module.exports = resolvers;
