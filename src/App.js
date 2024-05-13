import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import './App.css';
import SearchBar from "./Components/SearchBar";
import { Login } from "./Components/Login";
import { Cabecera } from "./Components/Cabecera";
import appFirebase from '../src/FirebaseTFG'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(appFirebase)


function App() {

  // Estado para controlar la visibilidad del componente Login
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClick = () => {
    // Cambiar el estado para mostrar el componente Login
    setShowLogin(!showLogin);
  };
  const handleReturnHomeClick = () => {
    // Cambiar el estado para mostrar el componente Login
    setShowLogin(!showLogin);
  };
  /* const [usuario, setUsuario] = useState(null);
   onAuthStateChanged(auth, (usuarioFirebase)=>{
     if(usuarioFirebase){
       setUsuario(usuarioFirebase)
     }else{
       setUsuario(null)
     }
   })
 */



  if (showLogin == false) {
    return (
      
      <div className="App">
        <div className="home">
          <Image className="fondo" src='./Assets/JPG/fondo_app.jpg' />
          <Image className="logo" src="./Assets/PNG/logo.png" />
          <SearchBar placeholder="Escribe aqui..." ></SearchBar>
          <Button onClick={handleLoginClick} className="button-left" variant="primary" >Login</Button>
          <Button className="button-right" variant="primary" >Register</Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="web">
        
        <Cabecera/>
        <Login />
        <Button onClick={handleReturnHomeClick}> Return Home</Button>
      </div>

    );
  }
}

export default App;
