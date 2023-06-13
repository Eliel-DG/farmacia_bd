const {Router}=require('express');
const farmacoController=require('../controllers/farmacos.controller');

const router=Router();
router.get('/',farmacoController.obtenerFarmacos); 
router.get('/:cb',farmacoController.obtenerFarmaco);
router.post('/insert',farmacoController.insertarFarmaco);
router.put('/actualizar/:cb',farmacoController.actualizarFarmaco);
router.delete('/borrar/:cb',farmacoController.eliminarFarmaco);
module.exports=router; 