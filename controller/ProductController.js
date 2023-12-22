


exports.addProduct = (req , res) => {
    res.json({
        msg : "Hello from add-product respnse",
        state : 1,
        data : ['iphone' , "mac" , 'android'],
    }) 
}