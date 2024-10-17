import NavBar from "../NavBar/NavBar";
import logo from "../../assets/images/logo.svg";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #41d3be;
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Header = () => {
  return (
    <header>
      <StyledHeader>
        <Logo src={logo} alt="Logo Bank" />
        <NavBar />
      </StyledHeader>
    </header>
  );
};

export default Header;
