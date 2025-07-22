const db = require('../model');
const bcrypt = require('bcrypt');

exports.login = async (req,res)=>{
    const {username,password} = req.body;

    try {
        const user = await db.User.findOne({where:{username}});

        if(!user){
            return res.status(404).json({message:'User Not Found'});
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(401).json({message:'Invalid Credentials'});
        }

        res.status(200).json({
            message:'Login Successful',
            user:{
                id:user.id,
                username:user.username,
                role:user.role,
            },
        });
    } catch (error) {
        res.status(500).json({message:'Server error', error: error.message})
    }
};