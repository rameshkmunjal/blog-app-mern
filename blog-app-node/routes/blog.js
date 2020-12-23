const express=require('express');
const router=express.Router();
const blogController=require('../controllers/blogController');

/* GET */
router.get('/all', blogController.getAllBlogs);
router.get('/blog/:id', blogController.getBlogById);
/* POST */
router.post('/blog/create', blogController.createNewBlog);
/* PUT */
router.put('/blog/edit/:id', blogController.editBlog);
/* DELETE */
router.delete('/blog/delete/:id', blogController.deleteBlog);
router.delete('/blogs/author/:author', blogController.deleteManyBlogs);


module.exports =router;