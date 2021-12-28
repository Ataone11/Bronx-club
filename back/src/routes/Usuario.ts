import {Schema, model} from 'mongoose'

const usuarioSchema = new Schema ({
    name:{
        type: String,
        required: true,
        trim: true
    },
    last_name:{
        type: String,
        required: true,
        trim: true
    },
    address:{
        type: String,
        required: true,
        trim: true
    },
    message:{
        type: String, 
        trim: true
    }
},{
    versionKey: false,
    timestamps: true

})

export default model('Usuario', usuarioSchema)

