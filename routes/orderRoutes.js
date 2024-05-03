
import express from 'express';
import { addOrder, getAllOrders, getOrderById } from '../controllers/oderController.js';
import { checkAdmin, checkUser } from '../middleware/checkUser.js';
import { getAllProducts } from '../controllers/productController.js';


const router = express.Router();


router.route('/').get(checkUser, checkAdmin, getAllOrders, getAllProducts).post(checkUser, addOrder)


router.route('/:id').get(checkUser, getOrderById);




export default router;
