import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const ticketSchema = new mongoose.Schema({
    key:{
        type:String,
        default:uuidv4(),
        unique:true
    },
    serialNumber:{
       type:String,
       unique:true
    },
    qrCode:{
        type:String,
        unique:true,
    },
    isUsed:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    }
})

const ticketModel = mongoose.model('ticketModel', ticketSchema);

export default ticketModel;



