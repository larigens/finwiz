const { AuthenticationError } = require('apollo-server-express');
const { Employee } = require('../../models');
const { signToken } = require('../../utils/authentication');

const resolvers = {
    Query: {
        employee: async (_, { employeeId }) => {
            try {
                const employee = await Employee.findOne({ _id: employeeId });
                return employee;
            } catch (err) {
                console.log(err);
                throw new Error('Failed to fetch employee.');
            }
        },
        employees: async () => {
            try {
                const employees = await Employee.find();
                return employees;
            } catch (err) {
                console.log(err);
                throw new Error('Failed to fetch employees.');
            }
        },
    },
    Mutation: {
        addEmployee: async (_, { input }) => {
            try {
                const employee = await Employee.create(input);
                const token = signToken(employee);
                return { token, employee };
            } catch (err) {
                console.log(err);
                throw new Error('Failed to add employee.');
            }
        },
        login: async (_, { username, password }) => {
            try {
                const employee = await Employee.findOne({ username });

                if (!employee) {
                    throw new AuthenticationError('Invalid username or password!');
                }

                const correctPw = await employee.validatePassword(password);

                if (!correctPw) {
                    throw new AuthenticationError('Invalid username or password!');
                }

                const token = signToken(employee);
                return { token, employee };
            } catch (err) {
                console.log(err);
                throw new Error('Failed to login.');
            }
        },
        updateEmployee: async (_, { employeeId, input }) => {
            try {
                const employee = await Employee.findOneAndUpdate(
                    { _id: employeeId },
                    { $set: input },
                    { new: true, runValidators: true }
                );
                return employee;
            } catch (err) {
                console.log(err);
                throw new Error('Failed to update employee.');
            }
        },
        removeEmployee: async (_, { employeeId }) => {
            try {
                return Employee.findOneAndDelete({ _id: employeeId });
            } catch (err) {
                console.log(err);
                throw new Error('Failed to remove employee.');
            }
        },
    },
};

module.exports = resolvers;
