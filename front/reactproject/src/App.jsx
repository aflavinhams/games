import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Listagem from "./paginas/listagem";
import Cadastro from "./paginas/cadastro";
import Detalhes from "./paginas/detalhes";
import "./App.css";

function App() {

  return(
    <Router>

      <div className="App">

        <h1> Aluna: Ana Flávia Martins dos Santos </h1>
        <h2> Listagem de Jogos </h2>

        <Routes>

          <Route path="/" element={<Listagem/>} />
          <Route path="/form" element={<Cadastro/>} />
          <Route path="/form/:id" element={<Cadastro/>} />
          <Route path="/detalhes/:id" element={<Detalhes/>} />

        </Routes>
      </div>

    </Router>
  )
}

export default App;