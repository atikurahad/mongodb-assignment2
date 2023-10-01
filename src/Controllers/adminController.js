exports.readAdmin=(req,res)=>{
    res.status(200).json({
       status:"success", 
       data:"Read Admin Api"
    });
 };
 
 exports.createAdmin=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Created Admin Api"
    });
 };

 exports.updateAdmin=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Updated Admin Api"
    });
 };

 exports.deleteAdmin=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Deleted Admin Api"
    });
 };