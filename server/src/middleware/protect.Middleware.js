
import jwt from "jsonwebtoken"

export const protect = async (req , res , next) => {
    
    const tokens =req.headers.authorization.split(" ")[1]
console.log(tokens);

if(!tokens){

    return res.status(401).json({ message: "unzutherized you cant get in" });
}

try {
    const decoded = jwt.verify(tokens,process.env.JWT_SECRET)
    req.user = decoded
     console.log(req.user);
    next()
} catch (error) {
    return res.status(500).json({ message: "invalid token or expired tokens" });
}



}




