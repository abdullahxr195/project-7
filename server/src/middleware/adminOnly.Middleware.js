export const adminOnly = async (req , res , next) => {
    
try {
    
const role =req.user.role;
if (!req.user || role!== "admin") {
    return res.status(401).json({ message: "unzutherised not allowed to do this action" });

}
 next()
} catch (error) {
    return res.status(500).json({ message: "invalid secruty" });
}



}