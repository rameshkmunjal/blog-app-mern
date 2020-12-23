let isEmpty=(str)=>{
    if(str==='' || str===undefined || str===null){
        return true;
    } else {
        return false
    }
}

module.exports={
    isEmpty:isEmpty
}