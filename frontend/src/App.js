import React from 'react';
import axios from 'axios';
import './App.css';

function reserve() {
  if (document.getElementById("email").value === "") {
        alert("Preencha o campo \"email\" para completar a reserva!")
  } else {
    axios.get("http://localhost:3001/reserve")
      .then(res => alert(res.data.message))
  }
}

function App() {
  return (
    <div className="App">
      <div className="logoConteiner">
        <img src="logo.png" alt="logo" className="logo" />
        <div className="logoName">Minions reserva</div>
      </div>

      <div className="email">e-mail <input type="email" id="email" /></div>
      <div className="productsMenu">PRODUTOS - minions</div>
      <img src="minion1.png" alt="Produto minion1" className="minion1" />

      <div className="reserveConteiner">
          <div>produto 1 - definição</div>
          <input type="button" value="RESERVAR" onClick={() => reserve()}/>
      </div>
    </div>
  );
}

export default App;
