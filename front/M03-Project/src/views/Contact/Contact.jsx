import "./Contact.css"
import { Title } from "../Home/Home";
import { useState } from "react";

const Contact = () => {

  const [contactData, setContactData] = useState({
    nombreCompleto: "",
    correo: "",
    telefono: "",
    mensaje: "",
    prefContacto: "",
    prefHorario: "",
    novedades: false
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    if (type === "radio") {
      if (checked) {
        setContactData({
          ...contactData,
          [name]: value,
        });
      }
    } else if (type === "checkbox") {
      setContactData({
        ...contactData,
        [name]: checked,
      });
    } else if (type === "select-one") {
      setContactData({
        ...contactData,
        [name]: value,
      });
    } else {
      setContactData({
        ...contactData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactData);
  }

  return (
    <div className="box">
      <Title> Contactanos </Title>
      <form onSubmit={handleSubmit} className="formContainer">
        <label htmlFor="nombreApellido">Nombre y Apellido</label>
        <input type="text" id="nombreApellido" name="nombreCompleto" className="input-padron" onChange={handleChange}  value={contactData.nombreCompleto} />

        <label htmlFor="correo">Correo Electronico</label>
        <input
          type="email"
          id="correo"
          className="input-padron"
          placeholder="usuario@gmail.com"
          name="correo"
          value={contactData.correo}
          onChange={handleChange}
        />

        <label htmlFor="telefono">Telefono</label>
        <input
          type="tel"
          id="telefono"
          className="input-padron"
          placeholder="(XX) XXXX XXXX"
          name="telefono"
          value={contactData.telefono}
          onChange={handleChange}
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" cols="66" rows="10" name="mensaje" value={contactData.mensaje} onChange={handleChange} ></textarea>

        <fieldset>
          <legend>¿Como le gustaria que lo contactemos?</legend>
          <label>
            <input type="radio" name="prefContacto" value="email" checked={contactData.prefContacto === "email"} onChange={handleChange} />
            Email
          </label>
          <label>
            <input type="radio" name="prefContacto" value="telefono" checked={contactData.prefContacto === "telefono"} onChange={handleChange} />
            Telefono
          </label>
          <label>
            <input type="radio" name="prefContacto" value="whatsapp" checked={contactData.prefContacto === "whatsapp"} onChange={handleChange} />
            Whatsapp
          </label>
        </fieldset>

        <fieldset>
          <legend>¿En cual horario prefiere ser atendido?</legend>
          <select style={{padding: "6px", fontSize: "1.2rem"}} name="prefHorario" value={contactData.prefHorario} onChange={handleChange} >
            <option>Mañana</option>
            <option>Tarde</option>
            <option>Noche</option>
          </select>
        </fieldset>

        <label className="checkbox" style={{marginBottom:"2rem"}}>
          <input type="checkbox" name="novedades" checked={contactData.novedades} onChange={handleChange}/>
          ¿Le gustaria recibir novedades de Smart Bank?
        </label>

        <input type="submit" name="novedades" className="enviar" />
      </form>
    </div>
  );
};

export default Contact;
