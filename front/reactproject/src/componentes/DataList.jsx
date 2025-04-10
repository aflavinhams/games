import './../App.css';
import React, {useEffect, useState} from "react";

const DataList = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('Componente montado');
    fetch("http://localhost:8800")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    console.log('Data alterada');
    console.log(data);
  }, [data]);
    
  return (
     <div className='corpo'>
      <h1>Listagem jogos</h1>

      <button onClick={props.onAdd} className="add-btn">Adicionar Jogo</button>
      <ul className = "list">
        {data.map((item) => (
          <li key={item.id} className='list-li' > 
            Nome: {item.nome}<br />
            Tamanho: {item.tamanho} <br />
            Plataforma: {item.plataforma} <br />
            Classifição: {item.classificacao} <br />
            Gênero: {item.genero} <br />
            <button onClick={() => props.clicked(item)} className='list-btn'>Ver mais detalhes</button>
            <button onClick={() => props.onEdit(item)} className='list-btn'>Editar</button>
            <button onClick={() => props.onDelete(item.id)} className='list-btn'>Deletar</button>
          </li>
        ))}
      </ul>
     </div>
    
  );
}

export default DataList;
