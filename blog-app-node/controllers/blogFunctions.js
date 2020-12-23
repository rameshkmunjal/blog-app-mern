/* dependencies */
const shortId = require('shortid');
/* including files   */
const BlogModel=require('../schema/blog');
const check=require('../libs/checkLib');

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
    create_new_blog:create_new_blog,
    edit_blog:edit_blog, 
    delete_blog:delete_blog,
    delete_many_blogs:delete_many_blogs
}
