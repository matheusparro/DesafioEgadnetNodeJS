import jwt from 'jsonwebtoken'


export default function signToken(req,res){
  const id = req.params
  return res.status(201).json({
    
      token: jwt.sign(id, "123", {
      expiresIn: "10s",
      }),
    });
  }