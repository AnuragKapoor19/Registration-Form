const express = require("express")
const User = require("../models/User")
const router = express.Router()

router.post("/register", async(req, res)=>{
    let oldemail = await User.findOne({email:req.body.email})
    let oldname = await User.findOne({name:req.body.name})
    if(!oldemail && !oldname){
        try {
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
        
            res.status(200).json({success: true,user: user})
        } catch (error) {
            console.log("Error: ",error.message);
            res.status(400).json({success: false})
        }
    }
    else{
        res.status(400).json({error:"Already a User"})
    }
})

module.exports = router;