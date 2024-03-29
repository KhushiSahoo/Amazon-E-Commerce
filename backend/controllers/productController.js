import AsyncHandler from "express-async-handler";
import Product from '../models/productModel.js';


// fetch all products
// GET/api/products
//public route

const getProducts= AsyncHandler(async(req , res) => {
    const keyword = req.query.keyword
      ? {
          category: {
            $regex: req.query.keyword,
            $options: "i",
          }
        }
      : {};
    const products = await Product.find({...keyword})
    //console.log(products)
    res.json(products);
})

//fetch single product  
// GET/api/products/:id
//public

const getProductById= AsyncHandler(async(req , res) => {
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    }
    else{
        res.status(404).json({message: "Product Not Found"});
    }
})

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = AsyncHandler(async (req, res) => {
    const { rating, comment } = req.body
  
    const product = await Product.findById(req.params.id)
  
    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      )
  
      if (alreadyReviewed) {
        res.status(400)
        throw new Error('Product already reviewed')
      }
  
      const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      }
  
      product.reviews.push(review)
  
      product.numReviews = product.reviews.length
  
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length
  
      await product.save()
      res.status(201).json({ message: 'Review added' })
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = AsyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3)

  res.json(products)
})
// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = AsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

const createProduct = AsyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    amazonPrice:0,
    user: req.user._id,
    image:
      "https://rukminim1.flixcart.com/image/612/612/jzhb24w0/general-cooler/r/g/f/gjh-205-b-aristo-25-original-imafjhpmkaqq78bh.jpeg?q=70",
    brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});
// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = AsyncHandler(async (req, res) => {
  const {
    name,
    price,
    amazonPrice,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.amazonPrice=amazonPrice
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export {
    getProducts , 
    getProductById,
    createProductReview,
    getTopProducts,
    deleteProduct,
    createProduct,
    updateProduct
}

