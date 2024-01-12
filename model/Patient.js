import { SchemaTypes, Schema, model } from "mongoose";

const patientSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    clinicals: [{ type: Schema.Types.ObjectId, ref: 'Clinicals'}]

});

export default model("Patient", patientSchema)