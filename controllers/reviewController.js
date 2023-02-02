const {Product, Review} = require("../models")

module.exports.renderAddReviewForm = async function(req,res){
    const product = await Product.findByPk(
        req.params.productId
    );
    const review = {
        customer_name: '',
        subject: '',
        rating: '1',
        description: ''
    }
    res.render('reviews/add', {product, review})
}