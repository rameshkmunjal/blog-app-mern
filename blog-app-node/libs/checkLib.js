/* Function will check - whether str holds any value or not */
let isEmpty=(value)=>{
    if(value==='' || value===undefined || value===null){
        return true;
    } else {
        return false
    }
}

module.exports={
    isEmpty:isEmpty
}