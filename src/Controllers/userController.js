exports.readUser=(req,res)=>{
    res.status(200).json({
       status:"success", 
       data:"Read User Api"
    });
 };
 
 exports.createUser=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Created User Api"
    });
 };

 exports.updateUser=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Updated User Api"
    });
 };

 exports.deleteUser=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Deleted User Api"
    });
 };