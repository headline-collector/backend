import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const User = mongoose.model('User', new Schema({
  name: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  watches: {type: Array, default: []}
}));

export default User;
