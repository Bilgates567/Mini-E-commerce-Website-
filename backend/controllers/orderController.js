const orderModule = require('../moduls/orderModel');

//create order - /api/v1/order
exports.createOrder = async(req,res,next)=>{
     const cartItems = req.body;
     const amount = Number(cartItems.reduce((acc,item)=>(item.product.price * item.qty),0)).toFixed(2);
     const status = 'Pending';

    const order = await orderModule.create({cartItems,amount,status})
    res.json({
        success : true,
        order
    })
}