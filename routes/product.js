const express = require("express")
const { list, listById, addProduct, updateProductByID, deleteProductByID } = require("../controllers/product")
const router = express.Router()


router.get('/list', list)
router.get('/listById', listById)
router.post('/addProduct', addProduct)
router.patch('/updateProductByID', updateProductByID)
router.delete('/deleteProductByID', deleteProductByID)


module.exports = router