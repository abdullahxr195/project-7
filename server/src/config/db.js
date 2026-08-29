import mongoose from "mongoose";
export const connectDb = async () => {

try{

await mongoose.connect(process.env.MONGO_URL)
console.log("mongo is connected")


}catch (error)
{

console.log("mongo is not connected", error);

process.exit(1)//
}



}