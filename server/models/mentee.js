var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var menteeSchema = new mongoose.Schema({
  first: {
   type: String,
   trim: true,
  },
  last: {
   type: String,
   trim: true,
  },
  email: {type:String },
  password: {type:String },
  zipcode: { type: String},
  focus: { type: String},
  industry: { type: String},
  linkedin: { type: String},
  background: { type: String},
  age: { type: String },
  range: { type: String },
  photo: { type: Schema.Types.Mixed },

  // timestamps: {
  //   createdAt: 'created_at',
  //   updatedAt: 'updated_at'
  // },
  _mentor: [{type: Schema.Types.ObjectId, ref: 'Mentee'}],
});

mongoose.model('Mentee', menteeSchema);
