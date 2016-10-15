import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DailyHeadline = mongoose.model('DailyHeadline', new Schema({
  site: { type: String, required: true},
  date: { type: String, required: true},
  headlines: {type: Array, required: true}
}));

export default DailyHeadline;
