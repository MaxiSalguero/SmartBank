import "./Campo.css";

const Campo = (props) => {

  const placeholderModificado = `${props.placeholder}...`

  const { titulo, type, valor, datosTurno, actualizarValor, nombre} = props

  const manejarCambio = (event) => {
    const { name, value } = event.target;

    actualizarValor({
      ...datosTurno,
      [name]: value,
    });
}

  return (
    <div className="campo">
      <label>{titulo}</label>
      <input
        name= {nombre}
        placeholder={placeholderModificado}
        type={type}
        value={valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default Campo;
