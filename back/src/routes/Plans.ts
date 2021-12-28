import { url } from 'inspector'
import {Schema, model} from 'mongoose'

const planSchema = new Schema ({
    name:{
        type: String,
        required: true,
        trim: true
    },
    pricestandar:{
        type: String,
        required: true,
        trim: true
    },
    price3month:{
        type: String,
        required: true,
        trim: true
    },
    price12month:{
        type: String,
        required: true,
        trim: true
    },
    include:{
        type: String, 
        required: true,
        trim: true
    },
    imgUrl:{
        type: String,
        required: true,
        trim: true
    }
},{
    versionKey: false,
    timestamps: true

})

export default model('plans', planSchema)

