import { Link } from "react-router-dom";
import "./CreatedTurn.css"

const CreatedTurn = () => {
  return (
    <>
      <section className="container">
        <div className="container-title">
          <h1 className="registry-header__title">Smart Bank</h1>
        </div>
        <div className="registry-card">
          <span className="icon-complete"></span>
          <h1 className="card__title">¡Turno creado con exito!</h1>
          <Link to="/turns" className="button">
            Ver Mis Turnos
          </Link>
        </div>
      </section>
    </>
  );
};

export default CreatedTurn;
