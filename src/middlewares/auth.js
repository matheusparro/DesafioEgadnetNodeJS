import { promisify }  from 'util'
import jwt from 'jsonwebtoken'



export default async function validateToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: 'Token not provided' });
    }
    console.log("oi")
    const [, token] = authHeader.split(' ');
    console.log(token)
    try {
      const verify = await promisify(jwt.verify)(token, "123");
      return next();
    } catch (err) {
      return res.status(401).json({ error: ' Token invalid' });
    }
  }
