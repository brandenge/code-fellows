'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: {type:'String', required:true},
  description: {type:'String', required:true},
  notes: {type:'String'},
});

const Item = mongoose.model('item', ItemSchema);
module.exports = Item;
