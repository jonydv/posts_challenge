import Category from '../models/categoryModel.js';
import asyncHandler from 'express-async-handler';

//@ Desc fetch all categorys
//@route Get /categorys
//@acces Public route
const getCategorys = asyncHandler(async (req, res, next) => {
    const categorys = await Category.findAll({});
    if(!categorys){
        res.status(404);
        throw new Error('No categorys found');
    }

    res.json(categorys);
});

//@ Desc create a category
//@route Post /categorys
//@acces Public route
const createCategory = asyncHandler(async(req, res, next) => {
    const { name } = req.body;

    const createCategory = await Category.create({name});

    if(createCategory){
        res.json(createCategory);
    }else{
        res.status(400);
        throw new Error('Invalid data');
    }
})

//@ Desc fetch category by id
//@route Get /categorys/:id
//@acces Public route

const getCategoryById = asyncHandler(async(req, res, next) => {
    
    const categoryId = req.params.id;
    
    const category = await Category.findByPk(categoryId);

    if(category){
        res.json(category);
    }else{
        res.status(404)
        throw new Error('Could not find the specfied category');
    }
});

//@ Desc update a category
//@route patch /categorys/:id
//@acces Public route

const updateCategory = asyncHandler(async(req, res, next) => {

    const categoryId = req.params.id;
    const updatedName = req.body.name;

    const category = await Category.update({name: updatedName}, {where: {id: categoryId}});
    console.log(category)
    if(category>0){
        res.json({name: updatedName});
    }else{
        res.status(404);
        throw new Error('Could not find the specified category')
    }

});

//@ Desc delete a category
//@route Delete /categorys/:id
//@acces Public route
const deleteCategory = asyncHandler(async(req, res, next) => {
    
    const categoryId = req.params.id;

    const deletedCategory = await Category.destroy({where: {id: categoryId}});

    if (deletedCategory>0){
        res.json('Category deleted succefully');
    }else{
        res.status(400);
        throw new Error('Could not find the specified category')
    }
});

export {
    getCategorys, getCategoryById, createCategory, updateCategory, deleteCategory
}