import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

const StyledLink = styled(Link)`
  text-align: center;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: #41d3be;
  background: white;
`;

const NavBar = () => {

  const user = useSelector(state => state.userData.user);

  let condition = true;

  (user.length == 0) && (condition = false);

  return (
    <nav>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/turns" style={{display: condition ? 'inline' : 'none'}}>Appointments</StyledLink>
      <StyledLink to="/about">About Us</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </nav>
  );
};

export default NavBar;
