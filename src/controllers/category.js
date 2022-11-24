//GET ALL ---> GET
const getAll = (req,res,next)=>{
    res.status(200).json({ message: "GET CATEGORY"});
}
//GET BY ID ---> GET
const getByID = (req,res,next)=>{
    const { id } = req.params;
    console.log(id)
    res.status(200).json({ message: "GET BY ID CATEGORY"});
}
//CREATE ---> POST
const createCategory = (req,res,next)=>{
    console.log(req.body);
    res.status(200).json({ message: "CREATE CATEGORY"});
}
//DELETE ---> DELETE
const deleteCategory = (req,res,next)=>{
    res.status(200).json({ message: "DETELE CATEGORY"});
}
//UPDATE ---> PUT
const updateCategory = (req,res,next)=>{
    res.status(200).json({ message: "PUT CATEGORY"});
}

module.exports = {
    getAll,
    getByID,
    createCategory,
    deleteCategory,
    updateCategory
}