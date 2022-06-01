const { Router } = require('express');
const router = Router();
const  multipart  =  require('connect-multiparty');

const  multipartMiddleware  =  multipart({ uploadDir:  'src/uploads' });

const productsControllers = require('../controllers/products.controller.js');

router.post('/uploads', multipartMiddleware, productsControllers.uploadImage);
router.get('/', productsControllers.getProducts);
router.post('/', productsControllers.createProducts);
router.get('/:id', productsControllers.readProduct);
router.put('/:id', productsControllers.updateProduct);
router.delete('/:id', productsControllers.deleteProduct);

module.exports = router;