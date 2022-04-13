import express from 'express';
const router = express.Router();

router.post('/login', (req,res)=> {

    const {Name,LastName} = req.body;

    return res.status(200).json({
        message: `Hello ${Name} ${LastName}`
    })
})


router.post('/calctax', (req,res)=> {

    const {Cost,Tax} = req.body;

    return res.status(200).json({
        message: `Full Cost : ${Cost+Cost*(Tax/100)}, Tax : ${Cost*(Tax/100)} `
    })
})


export default router;