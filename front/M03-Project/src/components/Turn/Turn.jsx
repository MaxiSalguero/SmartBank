import styled from "styled-components";
import banco from "../../assets/images/banco.svg";
import axios from "axios";
import { useState } from "react";

const Card = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1.2fr 1.2fr 0.7fr 1fr;
  grid-gap: 40px;
  margin: 2px 0;
  align-items: center;
  padding: 10px;
  font-size: 1rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  .type {
    font-weight: bold;
    margin-bottom: 6px;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  margin-left: 2rem;
`;

export const Button = styled.button`
  text-align: center;
  border-radius: 10px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid #41d3be;
  color: #41d3be;
  background: white;
  margin-right: 3rem;
  &:hover {
    cursor: pointer;
    background: #41d3be;
    color: white;
  }
  &:disabled {
    border: 1px solid grey;
    color: grey;
    pointer-events: none;
    cursor: not-allowed;
  }
`;

const Turn = ({ turno }) => {
  const { date, time, status, description, id } = turno;

  const [turnoStatus, setTurnoStatus] = useState(status);

  const handleClick = () => {
    axios
      .put(`http://localhost:3000/appointments/cancel/${id}`)
      .then(() => {
        console.log("Turno cancelado con exito");
        setTurnoStatus("cancelled");
      })
      .catch(() => console.log("Ocurrio un error"));
  };

  return (
    <Card>
      <Logo src={banco} alt="Logo banco" />
      <Info>
        <span className="type">{description}</span>
        <span>{`Hora : ${time}`}</span>
      </Info>
      <span>{`Fecha: ${date}`}</span>
      {turnoStatus === "active" ? (
        <span
          style={{
            textTransform: "uppercase",
            color: "green",
            fontWeight: "bold",
          }}
        >{`${turnoStatus}`}</span>
      ) : (
        <span
          style={{
            textTransform: "uppercase",
            color: "red",
            fontWeight: "bold",
          }}
        >{`${turnoStatus}`}</span>
      )}
      {turnoStatus === "active" ? (
        <Button onClick={handleClick}>Cancelar Turno</Button>
      ) : (
        <Button disabled>Cancelar Turno</Button>
      )}
    </Card>
  );
};

export default Turn;
