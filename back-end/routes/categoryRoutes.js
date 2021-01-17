import express from 'express';

import {
    getCategorys,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
    } 
    from '../controllers/categoryControllers.js';

const router = express.Router();

router.route('/')
    .get(getCategorys)
    .post(createCategory)


router.route('/:id')
    .get(getCategoryById)
    .patch(updateCategory)
    .delete(deleteCategory)

export default router;