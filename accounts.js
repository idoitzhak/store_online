import express from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = express.Router();

let instruments = [];
let students=[];

router.post('/login', async(req,res)=> {

    const {email,password} = req.body;
    const isStudent = students.find(x => x.email == email);
    if(isStudent)
    {
        const isMatch = await bcryptjs.compare(password,isStudent.password);
        if(isMatch)
        {
            return res.status(200).json({
                message: `Hello ${isStudent.fullname}`
            }) 
        } 
        else
        {
            return res.status(200).json({
                message: `Password not match`
            })
        }
    } 
    else{

    }

    
    
})

router.post('/calctax', (req,res)=> {

    const {Cost,Tax} = req.body;

    return res.status(200).json({
        message: `Full Cost : ${Cost+Cost*(Tax/100)}, Tax : ${Cost*(Tax/100)} `
    })
})


router.post('/addInstrument', async(req,res)=> {
    const instrument = req.body.instrument;
    instruments.push(instrument);
    return res.status(200).json({
        instruments: instruments
    });
});

router.post('/register', async(req,res)=> {

    const {fname,lname,email,password} = req.body;

    const isStudent = students.filter(x => x.email == email);

    if(isStudent.length > 0) {
        return res.status(200).json({
            message: "Email already exist"        
        });
    }
    else {

    const hash = await bcryptjs.hash(password, 10);

    const student =
    {
        fullname: fname + " " + lname,
        email: email,
        password: hash
    }

    students.push(student);
    return res.status(200).json({
        students: students        
    });
}

});

export default router;