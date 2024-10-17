import { Request, Response } from "express";
import {
  createAppointmentService,
  getAllAppointmentService,
  getAppointmentService,
  updateStateAppointmentService,
} from "../services/appointmentService";
import { Appointment } from "../entities/Appointment";

export const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const appointments: Appointment[] = await getAllAppointmentService();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(404).json({ error: "No se encontraron turnos" });
  }
};

export const getAppointment = async (req: Request, res: Response) => {
  const appointmentId = req.params.id;

  try {
    const appointment = await getAppointmentService(Number(appointmentId));
    res.status(200).json(appointment);
  } catch (error) {
    res.status(404).json({ error: "Appointment not found" });
  }
};

export const createAppointment = async (req: Request, res: Response) => {
  const { date, time, userId, description } = req.body;

  try {
    const newAppointment: Appointment = await createAppointmentService({
      date,
      time,
      userId,
      description,
    });
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ error: "El usuario brindado no existe" });
  }
};

export const updateStateAppointment = async (req: Request, res: Response) => {
  const appointmentId = req.params.id;

  try {
    await updateStateAppointmentService(Number(appointmentId));
    res.status(200).json({ message: "Turno cancelado correctamente" });
  } catch (error) {
    res.status(404).json({ error: "El turno ya fue cancelado o no existe" });
  }
};
