import Post from '../models/postModel.js';
import Category from '../models/categoryModel.js';

//Create the associations, one category has many post
// and on post belong to one category
    Category.hasMany(Post);
    Post.belongsTo(Category);
