import { Router } from "express";
import { createPatient, getAllPatient,getPatient, updatePatient, deletePatient } from "./controller/patient.js"
import  { createClinical, getAllClinicals }  from "./controller/clinicals.js";

const router = Router();

router.post('/patient/new', createPatient);
router.get('/patients', getAllPatient);
router.get('/patient/:id', getPatient);
router.patch("/patient/:id", updatePatient)
router.delete("/patient/:id", deletePatient)
router.post('/clinical/new', createClinical)
router.get('/clinical/:id', getAllClinicals)


export default router