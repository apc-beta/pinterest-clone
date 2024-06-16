const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

const uri = 'mongodb+srv://apc_2703:NEkeRNsDWCqz35qo@snapgrid.cw9k32m.mongodb.net/snapdb?retryWrites=true&w=majority';

console.log('Connecting to MongoDB with URI:', uri);

mongoose.connect(uri)
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch(err => {
    console.error('Connection error', err);
  });


const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  contact: {
    type: String,
    trim: true
  },
  profileImage: {
    type: String,
    default: 'default-image.jpg'
  },
  boards: {
    type: Array,
    default: []
  },
  posts:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }
  ]
});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);
