const posts = require('../helper/posts.json')




exports.GetALlPosts = (req , res) => {
            
    res.json({
        msg : posts,
       
    }) 
}