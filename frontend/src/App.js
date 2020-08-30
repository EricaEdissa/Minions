import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logoConteiner">
        <img src="logo.png" alt="logo" className="logo" />
        <div className="logoName">Minions reserva</div>
      </div>

      <div className="email">e-mail <input type="email" /></div>
      <div className="productsMenu">PRODUTOS - minions</div>
      <img src="minion1.png" alt="Produto minion1" className="minion1" />

      <div className="reserveConteiner">
          <div>produto 1 - definição</div>
          <input type="button" value="RESERVAR"/>
      </div>
    </div>
  );
}

export default App;
