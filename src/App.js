import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'


import Inicio from './Home/Inicio';
import Categorias from './Jogo/Categorias'
import Perguntas from './Jogo/Perguntas'
import Resultado from './Jogo/Resultado'
import Ranking from './Jogo/Ranking'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       
        
        <Route path='/' exact component={Inicio} />
        <Route path='/categorias' component={Categorias} />
        <Route path='/perguntas' component={Perguntas} />
        <Route path='/resultado' component={Resultado} />
        <Route path='/ranking' component={Ranking} />  
      </div>
    </BrowserRouter>
  );
}

export default App;
