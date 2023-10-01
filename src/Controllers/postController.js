exports.readPost=(req,res)=>{
    res.status(200).json({
       status:"success", 
       data:"Read Post Api"
    });
 };
 
 exports.createPost=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Created Post Api"
    });
 };

 exports.updatePost=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Updated Post Api"
    });
 };

 exports.deletePost=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Deleted Post Api"
    });
 };