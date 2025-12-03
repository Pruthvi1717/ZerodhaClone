const {model}= require('mongoose');
const {HoldingSchema}= require('../Schemas/HoldingSchema');

const HoldingsModel = new model('holdings', HoldingSchema);

module.exports= {HoldingsModel};