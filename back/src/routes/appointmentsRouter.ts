import { Router } from "express";
import { createAppointment, getAppointment, getAllAppointments, updateStateAppointment } from "../controllers/appointmentsController";
import { validateAppointId } from "../middlewares/validateAppointId";
import { validateAppointment } from "../middlewares/validateAppoint";

const appointmentsRoute = Router()

appointmentsRoute.get("/", getAllAppointments)

appointmentsRoute.get("/:id", validateAppointId , getAppointment)

appointmentsRoute.post("/schedule", validateAppointment, createAppointment)

appointmentsRoute.put("/cancel/:id", updateStateAppointment)

export default appointmentsRoute
