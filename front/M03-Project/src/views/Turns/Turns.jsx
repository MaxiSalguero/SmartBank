import { useEffect, useState} from "react";
import List from "../../components/List/List";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addAppointment, removeAppointment } from '../../redux/reducer'

const Turns = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData.user);
  const id = user.length > 0 ? user[0].id : null;

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/users/${id}`)
        .then((response) => {
          dispatch(removeAppointment())
          dispatch(addAppointment(response.data.appointments));
        })
        .catch(() => {
          console.log('Error al obtener los turnos del usuario');
        });
    }
  }, [id, dispatch]);

  const userAppointments = useSelector((state) => state.userData.userAppointments);

  return (
    <>
      {userAppointments.length > 0 ? (
        <List idUser = {id} userAppointment={ userAppointments } />
      ) : (
        <p>No hay turnos agendados para este usuario.</p>
      )}
    </>
  );
};

export default Turns;
