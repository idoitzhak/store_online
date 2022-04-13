import express from 'express';
const router = express.Router();

router.get('/items', (req,res)=> {
    return res.status(200).json({
        message: 'Hello from store route'
    })
})



export default router;