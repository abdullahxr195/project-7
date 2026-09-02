import mongoose from "mongoose";
const productsSchema =new mongoose.Schema({


neme:{

    type:String,
    required:true,

},

description:{

    type:String,
},


stock:{

type:Number,
min: 1,
default:1,

},

price:{
 type:Number,
min: 1,
default:1,

},

image:{

type:String,

},

catId:{

    type: mongoose.Schema.Types.ObjectId,
    ref:"Category",
   required:true,
}

},

{timestamps:true}

);


const Product = await mongoose.model("Products",productsSchema)
export default Product

