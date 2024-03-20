import { Router } from "express"

import categoryController from './controllers/Category/category-controller'
import orderController from './controllers/Order/order-controller'
import orderItemsController from './controllers/OrderItems/order-items-controller'
import productController from './controllers/Product/product-controller'
import userController from './controllers/Client/client-controller'

const router = Router()

// Category routes
router.get('/categories', categoryController.getCategories)
router.get('/categories/:id', categoryController.getCategoryById)
router.post('/categories', categoryController.createCategory)
router.put('/categories/:id', categoryController.updateCategory)
router.delete('/categories/:id', categoryController.deleteCategory)

// Order routes
router.get('/orders', orderController.getOrders)
router.get('/orders/:id', orderController.getOrderById)
router.post('/orders', orderController.createOrder)
router.put('/orders/:id', orderController.updateOrder)
router.delete('/orders/:id', orderController.deleteOrder)
router.get('/order/client/:id', orderController.getOrderFromClient)
router.get('/order/from/range/:start_date/:end_date', orderController.getOrderFromDateRange)

// Client routes
router.get('/clients', userController.getClients)
router.get('/clients/:id', userController.getClientById)
router.post('/clients', userController.createClient)
router.put('/clients/:id', userController.updateClient)
router.delete('/clients/:id', userController.deleteClient)

// Product routes
router.get('/products', productController.getProducts)
router.get('/products/:id', productController.getProductById)
router.post('/products', productController.createProduct)
router.put('/products/:id', productController.updateProduct)
router.delete('/products/:id', productController.deleteProduct)
router.get('/product/category/:id', productController.getProductsByCategory)
router.get('/product/avaliable/:avaliable', productController.getProductsByAvaliable)

// Order Items routes
router.get('/order-items', orderItemsController.getOrderItems)
router.get('/order-items/:id', orderItemsController.getOrderItemsById)
router.post('/order-items', orderItemsController.createOrderItems)
router.put('/order-items/:id', orderItemsController.updateOrderItems)
router.delete('/order-items/:id', orderItemsController.deleteOrderItems)
router.get('/order-items/order/:id', orderItemsController.getOrderItemsByOrderId)


export default router