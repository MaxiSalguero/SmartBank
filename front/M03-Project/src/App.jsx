import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Login from "./views/Login/Login.jsx";
import Register from "./views/Register/Register.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./views/Home/Home.jsx";
import About from "./views/About/About.jsx";
import Turns from "./views/Turns/Turns.jsx";
import Contact from "./views/Contact/Contact.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import CreatedTurn from "./components/CreatedTurn/CreatedTurn.jsx";
import DarkStyle from "./DarkStyle.js";

function App() {

  const location = useLocation();

  return (
    <>
      {location.pathname === "/register" && <DarkStyle/>}
      {location.pathname === "/" && <DarkStyle/>}
      {location.pathname !== "/" && location.pathname !== "/register" && <GlobalStyle />}
      {location.pathname !== "/" && location.pathname !== "/register" && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/turns" element={<Turns />} />
        <Route path="/succes" element={<CreatedTurn />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
