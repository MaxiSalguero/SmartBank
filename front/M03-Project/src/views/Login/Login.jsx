import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { validateLogin } from "../../helpers/validateLogin";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/reducer'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/users/login", userData)
      .then((response) => {
        const user = response.data.user
        dispatch(addUser(user))
        navigate("/home")
      })
      .catch(() => {
        alert(
          "El nombre brindado o la contraseña no corresponden a un usuario registrado"
        );
      });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const newErrors = validateLogin({ ...userData, [name]: value });
    setErrors({
      ...errors,
      [name]: newErrors[name],
    });
  };

  return (
    <section className="login-section">
      <div className="login-card">
        <div className="login-card-body">
          <h2 className="titulo">Login</h2>
          <p className="descripcion">Por favor, ingresar usuario y clave</p>

          <form onSubmit={handleOnSubmit}>
            {errors.username && (
              <label style={{ color: "red" }}>{errors.username}</label>
            )}
            <input
              type="text"
              name="username"
              value={userData.username}
              className="input-field"
              placeholder="Usuario"
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {errors.password && (
              <label style={{ color: "red" }}>{errors.password}</label>
            )}
            <input
              type="password"
              name="password"
              value={userData.password}
              className="input-field"
              placeholder="Clave"
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>

          <p className="signup-link">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="signup-link">
              Registrarse
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
