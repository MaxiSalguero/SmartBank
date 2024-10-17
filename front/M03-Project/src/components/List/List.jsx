import Turn from "../Turn/Turn";
import styled from "styled-components";
import addImage from "../../assets/images/add.png";
import Campo from "../Campo/Campo";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

const SubTitle = styled.h2`
  color: grey;
  padding: 1rem 0 1.5rem 0;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
`;
const Boton = styled.button`
  background-color: #6278F7;
  border-radius: 10px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  padding: 24px 32px;
  border: none;
  color: #ffffff;
  margin: 0 0 2rem 0;
  cursor: pointer;

  &hover{
  color: #95FFD4;
`;

const Form = styled.form`
  background-color: #f7f7f7;
  box-shadow: 7px 7px 15px rgba(0, 0, 0, 25%);
  border-radius: 20px;
  padding: 8px 50px;
  margin: 1rem 0 2rem 0;
  flex: 1 1;
`;

const Container = styled.div`
  width: 60rem;
  background-color: #f7f7f7;
  box-shadow: 7px 7px 15px rgba(0, 0, 0, 25%);
  border-radius: 20px;
  padding: 8px 50px;
  margin: 1rem 0 2rem 0;
  flex: 1 1;
`;

const List = ({ idUser, userAppointment }) => {
  const navigate = useNavigate();

  const [viewForm, setViewForm] = useState(false);
  const [appointData, setAppointData] = useState({
    userId: idUser,
    date: "",
    time: "",
    description: "",
  });

  const handleViewForm = () => {
    setViewForm(!viewForm);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/appointments/schedule", appointData)
      .then(() => {
        console.log(`Turno creado exitosamente`);
        navigate("/succes"); 
      })
      .catch(() => console.log("Ocurrio un error y no pudimos crear su turno"));
  };

  const turnos = userAppointment[0];

  return (
    <Box>
      <Section>
        <SubTitle>Mis Turnos</SubTitle>
        <img
          src={addImage}
          style={{ width: "5rem", cursor: "pointer" }}
          alt="add"
          onClick={handleViewForm}
        />
      </Section>
      {viewForm == true ? (
        <Form onSubmit={handleOnSubmit}>
          <SubTitle>Rellena el formulario para agendar un turno.</SubTitle>
          <Campo
            titulo="Fecha"
            placeholder="Ingresar fecha"
            type="date"
            nombre="date"
            valor={appointData.date}
            actualizarValor={setAppointData}
            datosTurno={appointData}
          />
          <Campo
            titulo="Hora"
            placeholder="Ingresar hora"
            type="text"
            nombre="time"
            valor={appointData.time}
            actualizarValor={setAppointData}
            datosTurno={appointData}
          />
          <Campo
            titulo="Descripcion"
            placeholder="Ingresar operacion a realizar"
            type="text"
            nombre="description"
            valor={appointData.description}
            actualizarValor={setAppointData}
            datosTurno={appointData}
          />
          <Boton type="submit">Agendar Turno</Boton>
        </Form>
      ) : null}
      <>
        {viewForm !== true && (
          <Container>
            {turnos.map((turn) => (
              <Turn key={turn.id} turno={turn} />
            ))}
          </Container>
        )}
      </>
    </Box>
  );
};

export default List;
