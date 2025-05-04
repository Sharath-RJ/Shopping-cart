const Product = require("../models/product")

// Get ALl products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.status(500).json({ error: "Server error" })
    }
}


