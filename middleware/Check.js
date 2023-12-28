


exports.checkSalary = (req , res , next ) => {


    if(req.body.name === "zakaria" ){
        next();
        return
    }

    

        res.json({
            msg : "انت غير مصرح لهذه العملية"
        })




}