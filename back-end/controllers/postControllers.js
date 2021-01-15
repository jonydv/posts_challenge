import sequelize from '../database/db.js';
import Post from '../models/postModel.js';
import asyncHandler from 'express-async-handler';

//@ Desc fetch All posts
//@route Get /posts
//@acces Public route
const getPosts = asyncHandler(async (req, res, next) => {
    const posts = await Post.findAll({order:[['date', 'DESC']]});
    if(!posts){
        res.status(404);
        throw new Error('Not posts found');
    }

    res.json(posts);
});

//@ Desc fetch one post by id
//@route Get /posts/:id
//@acces Public route
const getPostById = asyncHandler(async (req, res, next) => {
    const postId = req.params.id;
  
        const post = await Post.findByPk(postId)
        if(post === null){
            res.status(404);
            throw new Error ('Post not found')

        }else{
           res.json(post);
        }
   
    
});

//@ Desc create one post
//@route Post /posts
//@acces Public route
const createPost = asyncHandler(async (req, res, next) => {

    const { title, content, image, category } = req.body;
    let validImage;
    const validateImageUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
    
    if(validateImageUrl.test(image)){
        validImage = image;
    }else{
        res.status(400);
        throw new Error('Invalid image url');
    }
    
    const createdPost = await Post.create({
        title, 
        content,
        image,
        category,
        date: Date.now()
    });

    if(createdPost){
        res.json(createdPost)
    }else{
        res.status(400);
        throw new Error('Invalid post data');
    }

});

//@ Desc Update a post by id
//@route Patch /posts/:id
//@acces Public route
const updatePost = asyncHandler(async (req, res, next) => {
    
    const postId = req.params.id;

    const post = await Post.findByPk(postId);

    if(post){
        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;
        post.image = req.body.image || post.image;
        post.category = req.body.category || post.category;
    }

    const updatePost = await Post.update(post.dataValues, {where: {id: postId}})
   
    if(updatePost!==0){
        res.json(post)
    }else{
        res.status(400);
        throw new Error('Invalid post data');
    }

});

//@ Desc Delete a post by id
//@route Delete /posts/:id
//@acces Public route
const deletePost = asyncHandler(async (req, res, next) => {
    
    const postId = req.params.id;

    const deletedPost = await Post.destroy({where: {id: postId}});
       
    if(deletedPost!==0){
        res.json('Post deleted succefully')
    }else{
        res.status(404);
        throw new Error('Post not found');
    }

});


export {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};