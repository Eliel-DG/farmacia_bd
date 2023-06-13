const farmacos=require('../models/Farmaco.model');
const farmacoController={};
farmacoController.obtenerFarmacos=async(req,res)=>{
    const farmaco=await farmacos.find();
    res.json(farmaco);
};
farmacoController.obtenerFarmaco=async(req,res)=>{
    const farmaco=await farmacos.findOne({codigobarras:req.params.cb});
    ///res.json(producto);
    if (farmaco!=null)
        res.json(farmaco);
    else
        res.json({status:"Not Found"});    
};
farmacoController.insertarFarmaco=async(req,res)=>{
    const farmacoInsertado=new farmacos(req.body);
    await farmacoInsertado.save();
    res.json({
        status:"Farmaco insertado"
    });
};
farmacoController.actualizarFarmaco=async(req,res)=>{
    const resp = await farmacos.findOneAndUpdate({codigobarras:req.params.cb},req.body);
    /*res.json({
        status:"Producto actualizado"
    });*/
    if(res!=null)
        res.json({status:"Farmaco Eliminado"});
    else
        res.json({status:"Not Found"});
};
farmacoController.eliminarFarmaco=async(req,res)=>{
    const resp = await farmacos.findOneAndDelete({codigobarras:req.params.cb});
    /*res.json({
        status:"Producto eliminado"
    });*/

    if(res!=null)
        res.json({status:"Farmaco Eliminado"});
    else
        res.json({status:"Not Found"});
};
module.exports=farmacoController;