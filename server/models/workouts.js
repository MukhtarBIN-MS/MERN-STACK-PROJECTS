import mongoose from "mongoose";

const workOutSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    reps:{
        type:Number,
        required:true
    },
    loads:{
        type:Number,
        required: true
    }
},{timestamps:true});

const workOutModel = mongoose.model('workoutmodel', workOutSchema);

export default workOutModel;