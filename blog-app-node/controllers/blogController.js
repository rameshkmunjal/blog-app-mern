
const bf=require('./blogFunctions');
/* GET API related function */
let getAllBlogs=(req, res)=>{
    bf.get_all_blogs(req)
        .then(resolve=>{
            res.send(resolve);            
        })
        .catch(error=>{
            res.send(error)
        })
    
}

let getBlogById=(req, res)=>{
    bf.get_blog_by_id(req)
        .then(resolve=>{
            res.send(resolve);
        })
        .catch(error=>{
            res.send(error)
        })    
}

let getBlogsByTags=(req, res)=>{
    bf.get_blogs_by_tags(req)
        .then(resolve=>{
            res.send(resolve)
        })
        .then(error=>{
            res.send(error)
        })
}

let getBlogsByAnyTagItem=(req, res)=>{
    bf.get_blogs_by_any_tag_item(req)
        .then(resolve=>{
            res.send(resolve)
        })
        .then(error=>{
            res.send(error)
        })
}
/* POST API related function */
let createNewBlog=(req, res)=>{ 
    bf.create_new_blog(req)
        .then(resolve=>{
            res.send(resolve);
        })
        .catch(error=>{
            res.send(error)
        })   
    
}
/* PUT API related function */
let editBlog=(req, res)=>{
    bf.edit_blog(req)
        .then(resolve=>{
            res.send(resolve);
        })
        .catch(error=>{
            res.send(error)
        })    
}

let updateBlogTags=(req, res)=>{
    bf.update_blog_tags(req)
        .then(resolve=>{
            res.send(resolve);
        })
        .catch(error=>{
            res.send(error);
        })
}
/* DELETE API related functions */
let deleteBlog=(req, res)=>{
    bf.delete_blog(req)
        .then(resolve=>{
            res.send(resolve);
        })
        .catch(error=>{
            res.send(error)
        })    
}

let deleteManyBlogs=(req, res)=>{
    bf.delete_many_blogs(req)
        .then(resolve=>{
            res.send(resolve);
        })
        .catch(error=>{
            res.send(error)
        })    
}


module.exports={
    getAllBlogs:getAllBlogs,
    getBlogsByTags:getBlogsByTags,
    getBlogsByAnyTagItem:getBlogsByAnyTagItem,
    getBlogById:getBlogById,
    createNewBlog:createNewBlog,
    editBlog:editBlog, 
    updateBlogTags:updateBlogTags,
    deleteBlog:deleteBlog,
    deleteManyBlogs:deleteManyBlogs

}