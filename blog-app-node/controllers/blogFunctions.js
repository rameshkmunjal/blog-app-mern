/* dependencies */
const shortId = require('shortid');
/* including files   */
const BlogModel=require('../schema/blog');
const check=require('../libs/checkLib');

/* GET api related functions */
let get_all_blogs=(req)=>{
    return new Promise((resolve, reject)=>{
        BlogModel.find() 
            .lean()
            .sort({"createdOn":-1})
            .exec((err, result)=>{
                if(err){
                    reject(err);
                } else if(check.isEmpty(result)){
                    reject("No data found");
                } else {
                    resolve(result);
                }
        })
    })    
}

let get_blog_by_id=(req)=>{
    return new Promise((resolve, reject)=>{
        BlogModel.findOne({id:req.params.id})        
            
            .exec((err, result)=>{
                if(err){
                    reject(err);
                } else if(check.isEmpty(result)){
                    reject("No data found");
                } else {
                    
                    let obj=result.toObject();
                    delete obj._id;
                    delete obj.__v;
                    resolve(obj);                    
                }
        })
    })    
}

let get_blogs_by_tags=(req)=>{
    return new  Promise((resolve, reject)=>{
        const tagsList=req.query.list;
        const tagsArray=tagsList.split(' ');
        BlogModel.find({tags: {$all : tagsArray}})
            .exec((err, result)=>{
                if(err){
                    reject(err);
                } else if(check.isEmpty(result)){
                    reject("No Data found");
                } else {
                    resolve(result)
                }
            })
    })
}

let get_blogs_by_any_tag_item=(req)=>{
    return new  Promise((resolve, reject)=>{
        const tagsList=req.query.list;
        const tagsArray=tagsList.split(' ');
        BlogModel.find({tags: {$in : tagsArray}})
            .exec((err, result)=>{
                if(err){
                    reject(err);
                } else if(check.isEmpty(result)){
                    reject("No Data found");
                } else {
                    resolve(result)
                }
            })
    })
}
/* POST api related functions */
let create_new_blog=(req)=>{
    return new Promise((resolve, reject)=>{
    let newBlog=new BlogModel({
        "id":shortId.generate(),
        "title":req.body.title,
        "body":req.body.contents,
        "author":req.body.author,
        "createdOn":Date.now(),
        "tags":req.body.tags
    })
    
    newBlog.save((err, blogCreated)=>{
        console.log("new blog saved");
        if(err){            
            reject(err)
        } else {            
            let obj=blogCreated.toObject();
            delete obj._id;
            delete obj.__v;
            resolve(obj)
        }
    })
    })
}
/* PUT api related functions */
let edit_blog=(req)=>{
    return new Promise((resolve, reject)=>{
        let options=req.body;
        
        BlogModel.update({'id':req.params.id}, options , {multi:true})             
            .exec((err, result)=>{
                if(err){
                    reject(err);
                } else if(check.isEmpty(result)){
                    reject("No data found");
                } else {                                      
                    resolve(result);                    
                }
        })
    })    
}

let update_blog_tags=(req)=>{
    return new Promise((resolve, reject)=>{
        BlogModel.updateOne({tags:req.body.oldItem},
            {$set:{'tags.$':req.body.newItem}},
            {new:true}
            ).exec((err, result)=>{
                if(err){
                    console.log(err);
                    reject(err);
                } else if(check.isEmpty(result)){
                    console.log("No Data found");
                } else {
                    resolve(result)
                }
            })            
    })
}

/* DELETE api related functions */
let delete_blog=(req)=>{
    return new Promise((resolve, reject)=>{
        BlogModel.deleteOne({id:req.params.id})        
            
            .exec((err, result)=>{
                if(err){
                    reject(err);
                } else if(check.isEmpty(result)){
                    reject("No data found");
                } else {
                    
                    
                    resolve(result);                    
                }
        })
    })    
}

let delete_many_blogs=(req)=>{
    return new Promise((resolve, reject)=>{
        BlogModel.deleteMany({'author':req.params.author})        
            
            .exec((err, result)=>{
                if(err){
                    reject(err);
                } else if(check.isEmpty(result)){
                    reject("No data found");
                } else {
                    
                    
                    resolve(result);                    
                }
        })
    })    
}



module.exports={
    get_all_blogs:get_all_blogs,
    get_blog_by_id:get_blog_by_id,
    get_blogs_by_tags:get_blogs_by_tags,
    get_blogs_by_any_tag_item:get_blogs_by_any_tag_item,
    create_new_blog:create_new_blog,
    edit_blog:edit_blog, 
    update_blog_tags:update_blog_tags,
    delete_blog:delete_blog,
    delete_many_blogs:delete_many_blogs
}
