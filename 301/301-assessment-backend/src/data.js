'use strict';

const ItemModel = require('./item-model.js');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const Data = { };

Data.addAnItem = async(req, res, next) => {
  try {
    const data = req.body;
    const item = new ItemModel(data);
    await item.save();
    res.status(200).json(item);
  } catch(error) {
    next(error);
  }
}

Data.getAllItems = async(req, res, next) => {
  try{
    const items = await ItemModel.find({});
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
}

Data.getOneItem = async(req, res, next) => {
  try {
    const id = req.params.id;
    const items = await ItemModel.find({_id:id});
    res.status(200).json(items[0]);
  } catch (error) {
    next(error);
  }
}

Data.deleteOneItem = async(req, res, next) => {
  try {
    const id = req.params.id;
    const item = await ItemModel.findByIdAndDelete(id);
    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
}

module.exports = Data;
