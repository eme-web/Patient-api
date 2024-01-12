import Clinicals from "../model/Clinicals.js"
import { error, success } from "../helpers/response.js"


// create - create new clinical data
const createClinical = async(req, res) => {
    try {
        const { patientId, body } = req;
        const clinical = await new Clinicals({ ... body, _id: patientId  }).save();

        return success(res, 201, clinical);
    } catch (e) {
        return error(res, 500, e);
    }

};

// getAll - Get all clinical data
 const getAllClinicals = async (req, res) => {
    try {
        const { params: { id }} = req;
        const clinical = await Clinicals.findById({ id }).lean();
        return success(res, 200, clinical);
    } catch (e) {
        return error(res, 500, e);
    }
};

export { createClinical, getAllClinicals }