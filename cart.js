import express from 'express';
const router = express.Router();

router.get('/wallet', (req,res)=> {
    return res.status(200).json({
        message: 'Hello from cart route'
    })
})
export default router;