/* dependencies */
const express=require('express');
const router=express.Router();
/* including files */
const blogController=require('../controllers/blogController');

/* GET */
router.get('/all', blogController.getAllBlogs);
router.get('/blog/:id', blogController.getBlogById);
router.get('/blogs/tags' , blogController.getBlogsByTags);
router.get('/blogs/tags/any' , blogController.getBlogsByAnyTagItem);
/* POST */
router.post('/blog/create', blogController.createNewBlog);
/* PUT */
router.put('/blog/edit/:id', blogController.editBlog);
router.put('/blog/tags/update', blogController.updateBlogTags);
/* DELETE */
router.delete('/blog/delete/:id', blogController.deleteBlog);
router.delete('/blogs/author/:author', blogController.deleteManyBlogs);


module.exports =router;