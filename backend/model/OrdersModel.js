const {model}= require('mongoose');
const {OrdersSchema}= require('../Schemas/OrdersSchema');

const OrdersModel = new model('orders', OrdersSchema);
module.exports= {OrdersModel};