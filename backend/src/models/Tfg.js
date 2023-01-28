import { Schema, model } from "mongoose"

const TfgSchema = new Schema({
    title: { 
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    numStudentsNeeded: {
        type: Number
    },
    opened: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Tfg', TfgSchema);