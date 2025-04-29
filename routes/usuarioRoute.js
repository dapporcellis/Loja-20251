import express from 'express';
const router = express.Router();

import { 
    abreadd, 
    add, 
    listar, 
    filtrar, 
    abreedt, 
    edt, 
    del 
} from '../controllers/usuarioController.js';

router.get('/add', abreadd);
router.post('/add', add);
router.get('/lst', listar);
router.post('/lst', filtrar);
router.get('/edt/:id', abreedt);
router.post('/edt/:id', edt);
router.get('/del/:id', del);

export default router;