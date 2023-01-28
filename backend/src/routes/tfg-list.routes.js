import { Router } from "express";
const router = Router()

router.get('/tfg-list', (req, res) => {
    res.send('Lista de TFGs')
})

export default router;