import styled from "styled-components";
import { Button } from "../../components/Turn/Turn";

const StyledContainer = styled.div`
  background-color: rgb(241, 241, 241);
  min-height: 90vh;
  padding: 0px 15vw;
`;

export const Title = styled.h1`
  color: grey;
  padding: 25px 0;
`;

const StyledContent = styled.section`
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const HomeBtn = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #41d3be;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
  cursor: pointer;
  background-color: #31b2a7;
}
`

const Home = () => {
  return (
     <StyledContainer>
        <Title>Smart Bank</Title>
        <StyledContent>
          <Title style={{fontWeight:"lighter"}}>Bienvenido a Smart Bank</Title>
          <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "20px"}}>Tu banco inteligente que te ofrece soluciones financieras innovadoras para tus necesidades.</p>
          <HomeBtn>Abrir una cuenta</HomeBtn>
        </StyledContent>
      </StyledContainer>
  );
};

export default Home;
