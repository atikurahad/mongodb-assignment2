exports.readSubAdmin=(req,res)=>{
    res.status(200).json({
       status:"success", 
       data:"Read SubAdmin Api"
    });
 };
 
 exports.createSubAdmin=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Created SubAdmin Api"
    });
 };

 exports.updateSubAdmin=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Updated SubAdmin Api"
    });
 };

 exports.deleteSubAdmin=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Deleted SubAdmin Api"
    });
 };