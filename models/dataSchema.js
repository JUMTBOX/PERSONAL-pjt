const mongoose = require('mongoose');
const { Schema } = mongoose;


const coinSchema = new Schema({
  ID: {
    type: String,
    required: true,
    unique: true,
  },
  SYMBOL: {
    type: String,
    required: true,
  },
  NAME: {
    type: String,
    required: true,
  },
}, 
{
    collection : 'coin-data',
}
);

module.exports = mongoose.model('Data',coinSchema);