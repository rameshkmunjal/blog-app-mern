
const bf=require('./blogFunctions');

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

let createNewBlog=(req, res)=>{ 
    bf.create_new_blog(req)
        .then(resolve=>{
            res.send(resolve);
        })
        .catch(error=>{
            res.send(error)
        })   
    
}

let editBlog=(req, res)=>{
    bf.edit_blog(req)
        .then(resolve=>{
            res.send(resolve);
        })
        .catch(error=>{
            res.send(error)
        })    
}

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
    getBlogById:getBlogById,
    createNewBlog:createNewBlog,
    editBlog:editBlog, 
    deleteBlog:deleteBlog,
    deleteManyBlogs:deleteManyBlogs

}