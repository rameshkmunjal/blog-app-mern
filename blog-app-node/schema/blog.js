/* Blog Model - to decide the fields of documents in blogs collection */
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const BlogSchema=new Schema({
    id:{type:String, unique:true},
    title:String,
    body:String,
    author:String,
    createdOn:{type:Date, default:Date.now},
    tags:[String]
})

const BlogModel=mongoose.model('Blog', BlogSchema);
module.exports=BlogModel;
