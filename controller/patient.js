import Patient from "../model/Patient.js"
import { error, success } from "../helpers/response.js"

// CreatePatient - create a new patient
const createPatient = async (req, res) => {
    try {
        const { body: { firstName, lastName, age, clinicals } } = req;
        const patient = await new Patient({...req.body }).save();
        return success(res, 201, patient)
    } catch (e) {
        return error(res, 500, e);
    }

};

// getAllPatient - Get all patients
const getAllPatient = async (req, res) => {
    try {
        const patients = await Patient.find();
        return success(res, 200, patients);
    } catch (e) {
        return error(res, 500, e);
    }
};

// getPatient - Get patient by id
const getPatient = async (req, res) => {
    try {
        const {params: { id } } = req
        let user = await Patient.findById({ _id: id }).populate("clinicals").lean();
        return success(res, 200, user)

    } catch (e){
        return error(res, 500, e)
    }
}

//UpdatePatient - update patient's data
const updatePatient = async (req, res) => {
    try {
        const {
            params: { id },
            body: { age }
        } = req;

        const patient = await Patient.findByIdAndUpdate({ _id: id}, { $set: { age }});
        return success(res, 202, patient);
    } catch (e) {
        return error(res, 500, e);
    }
};

//deletePatient - Delete a patient
const deletePatient = async(req, res) => {
    try {
        const { params: { id }} = req;
        const patient = await Patient.findbyIdAndDelete({ _id: id});
        return success(res, 200, patient);
    } catch (e) {
        return error(res, 500, e);
    }
};

export { createPatient, getAllPatient, getPatient, updatePatient, deletePatient }