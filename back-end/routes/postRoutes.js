import express from 'express';

import {
    createPost,
    deletePost,
    getPostById, 
    getPosts,
    updatePost,
    } 
    from '../controllers/postControllers.js';

const router = express.Router();

router.route('/')
    .get(getPosts)
    .post(createPost)


router.route('/:id')
    .get(getPostById)
    .patch(updatePost)
    .delete(deletePost)

export default router;