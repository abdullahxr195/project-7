import mongoose, { Types } from "mongoose";

const  categorySchema =new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true,
        },

       descriprion:{
            type:String,
       },

    },

    {
        timestamps:true,
    },
);


const Category = mongoose.model("Category", categorySchema)
export default Category;