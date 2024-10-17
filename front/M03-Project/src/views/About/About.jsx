import "./About.css"

const About = () => {
  return (
    <div className="containerAbout">
      <h1>Acerca de Nosotros</h1>
      <p>Somos Smart Bank, un banco digital que se enfoca en brindar servicios financieros de calidad y accesibles para todos.</p>
      <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Miembro del equipo"/>
          <h3>Miembro 1</h3>
          <p>CEO & Fundador</p>
      </div>
      <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Miembro del equipo"/>
          <h3>Miembro 2</h3>
          <p>Directora de Operaciones</p>
      </div>
      <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Miembro del equipo"/>
          <h3>Miembro 3</h3>
          <p>Director de Tecnología</p>
      </div>
    </div>
  );
};

export default About;
