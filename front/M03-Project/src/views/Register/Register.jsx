import axios from "axios";
import { useState } from "react";
import "./Register.css";
import { validateRegister } from "../../helpers/validateRegister";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    birthdate: "",
    dni: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    birthdate: "",
    dni: "",
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const newErrors = validateRegister({ ...form, [name]: value });
    setErrors({
      ...errors,
      [name]: newErrors[name],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
    axios.post("http://localhost:3000/users/register", form)
    .then(() => {
      alert("Solicitud enviada exitosamente");
      navigate("/")
    })
    .catch(() => {
      alert("Error al enviar la solicitud");
    });
  };

  return (
    <section className="containerSection">
      <h1>Formulario de Registro</h1>
      <form
        onSubmit={handleSubmit} 
        autoComplete="off"
        className="containerForm"
      >
        <div className="inputForm">
          {errors.name && <label style={{ color: "red", fontSize: "1rem", marginBottom: "5px" }}>{errors.name}</label>}
          <input
            type="text"
            value={form.name}
            name="name"
            placeholder="Nombre"
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="inputForm">
          {errors.email && <label style={{ color: "red", fontSize: "1rem", marginBottom: "5px" }}>{errors.email}</label>}
          <input
            type="email"
            value={form.email}
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="inputForm">
          {errors.birthdate && <label style={{ color: "red", fontSize: "1rem", marginBottom: "5px" }}>{errors.birthdate}</label>}
          <input
            type="date"
            value={form.birthdate}
            name="birthdate"
            placeholder="Fecha de nacimiento"
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="inputForm">
          {errors.dni && <label style={{ color: "red", fontSize: "1rem", marginBottom: "5px" }}>{errors.dni}</label>}
          <input
            type="number"
            value={form.dni}
            name="dni"
            placeholder="Dni"
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="inputForm">
          {errors.username && <label style={{ color: "red", fontSize: "1rem", marginBottom: "5px" }}>{errors.username}</label>}
          <input
            type="text"
            value={form.username}
            name="username"
            placeholder="Username"
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="inputForm">
          {errors.password && <label style={{ color: "red", fontSize: "1rem", marginBottom: "5px" }}>{errors.password}</label>}
          <input
            type="password"
            value={form.password}
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </div>

        <button type="submit" className="login-btn">Submit</button>
      </form>
    </section>
  );
};

export default Register;
