const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.token
    if(authHeader){
        jwt.verify(token, process.env.JWT_SEC), (err,user)=>{
            if(err) res.status(401).json("wrong token");
            req.user = user;
            next()
        };
    }else{
        return res.status(401).json('bad auth')
    }
}

const verifyTokenannAuthrorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id ||req.user.isAdmin){
            next();
        }else{
            res.status(403).json("you are not allowed!");
        }
    });
}

module.exports = {verifyToken, verifyTokenannAuthrorization};