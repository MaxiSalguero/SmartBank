import { AppointmentModel, UserModel } from "../config/data-source";
import AppointmentDto from "../dtos/Appointment.Dto";
import { Appointment } from "../entities/Appointment";

export const createAppointmentService = async (
  appointmentData: AppointmentDto
): Promise<Appointment> => {
  const newAppointment: Appointment = await AppointmentModel.create(
    appointmentData
  );

  const user = await UserModel.findOneBy({
    id: appointmentData.userId,
  });

  user? ((newAppointment.user = user), AppointmentModel.save(newAppointment))
    : (() => { throw new Error("Usuario inexistente"); })();

  return newAppointment;
};

export const getAllAppointmentService = async (): Promise<Appointment[]> => {
  const appointments = await AppointmentModel.find();
  if (appointments.length > 0) {
    return appointments;
  } else {
    throw Error("No se encontraron turnos");
  }
};

export const getAppointmentService = async (
  appointmentId: number
): Promise<Appointment | null> => {
  const appointment = await AppointmentModel.findOne({
    where: { id: appointmentId },
    relations: ["user"],
  });

  if (appointment) return appointment;
  else throw Error("ID de turno inexistente");
};

export const updateStateAppointmentService = async (
  id: number
): Promise<Appointment> => {
  const appointment = await AppointmentModel.findOneBy({ id });

  if (appointment && appointment.status != "cancelled") {
    appointment.status = "cancelled";
    await AppointmentModel.save(appointment);
    return appointment;
  } else {
    throw Error("Turno inexistente");
  }
};
