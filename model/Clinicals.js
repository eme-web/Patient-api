import { Schema, SchemaTypes, model } from "mongoose";

const clinicalSchema = new Schema({
    componentName: String,
    componentValue: String,
    patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true }

})

export default model("Clinicals", clinicalSchema)