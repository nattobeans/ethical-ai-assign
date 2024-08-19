import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    authentication: {
        password: { type: String, required: true, select: false},
        salt: {type: String, select: false, required: true},
        sessionToken: {type: String, select: false},
    },
    modules: {
        deepFake: { type: Number, default: '0'},
        ethics: {type: Number, default: '0'},
        security: {type: Number, default: '0'},
        misInfo: {type: Number, default: '0'},
        // default: [{deepFake: '0'},  {ethics: '0'}, {security: '0'}, {misInfo: '0'}]
    },
});

export const UserModel = mongoose.model('User', UserSchema);

// Getting User Data
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({ 
    'authentication.sessionToken': sessionToken, 
});
export const getUserById = (id: string) => UserModel.findById(id);

// Manipulating Users
export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());
// export const deleteUserById = (id: string) => UserModel.findOneAndDelete({ _id: id });
// export const updateUserById = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values)
