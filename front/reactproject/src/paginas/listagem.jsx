import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Listagem = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isEditModal, setIsEditModal] = useState(false);
  const [editedJogo, setEditedJogo] = useState({});

  useEffect(() => {
    fetch("http://localhost:8800")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  function handleEdit(item) {
    setEditedJogo(item);
    setIsEditModal(true);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEditedJogo((prev) => ({ ...prev, [name]: value }));
  }

  function handleSaveEdit() {
    console.log(editedJogo);
    fetch(`http://localhost:8800/${editedJogo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedJogo),
    })
      .then((response) => response.json())
      .then(() => {
        console.log(`Jogo ${editedJogo.nome} atualizado.`);
        alert(`Jogo ${editedJogo.nome} atualizado.`);
        setIsEditModal(false);
        setData((prevData) =>
          prevData.map((jogo) =>
            jogo.id === editedJogo.id ? editedJogo : jogo
          )
        );
      })
      .catch((error) => console.error("Erro ao atualizar:", error));
  }

  function handleDelete(id) {
    fetch(`http://localhost:8800/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log(`Jogo ${id} deletado.`);
        setData((prevData) => prevData.filter((jogo) => jogo.id !== id));
      })
      .catch((error) => console.error("Erro ao deletar:", error));
  }

  return (
    <div className="container">

      <button onClick={() => navigate("/form")} className="list-btn">
        Cadastrar Novo Jogo
      </button>

      <ul className="list">
        {data.map((item) => (
          <li key={item.id} className="list-li">
            Nome: {item.nome}
            <br />
            Tamanho: {item.tamanho}
            <br />
            Plataforma: {item.plataforma}
            <br />
            Classificação: {item.classificacao}
            <br />
            Gênero: {item.genero}
            <br />
            <button onClick={() => navigate("/detalhes/:id", { state: item })} className='list-btn'>
            Ver mais detalhes
            </button>
            <button onClick={() => handleEdit(item)} className="list-btn">
              Editar
            </button>
            <button onClick={() => handleDelete(item.id)} className="list-btn">
              Deletar
            </button>
          </li>
        ))}
      </ul>

      {isEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Editar Jogo</h2>
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={editedJogo.nome}
              onChange={handleInputChange}
            />
            <label>Descrição:</label>
            <input
              type="text"
              name="descricao"
              value={editedJogo.descricao}
              onChange={handleInputChange}
            />
            <label>Tamanho:</label>
            <input
              type="text"
              name="tamanho"
              value={editedJogo.tamanho}
              onChange={handleInputChange}
            />
            <label>Plataforma:</label>
            <input
              type="text"
              name="plataforma"
              value={editedJogo.plataforma}
              onChange={handleInputChange}
            />
            <label>Classificação:</label>
            <input
              type="text"
              name="classificacao"
              value={editedJogo.classificacao}
              onChange={handleInputChange}
            />
            <label>Gênero:</label>
            <input
              type="text"
              name="genero"
              value={editedJogo.genero}
              onChange={handleInputChange}
            />
            <button onClick={handleSaveEdit} className="list-btn">
              Salvar
            </button>
            <button onClick={() => setIsEditModal(false)} className="list-btn">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Listagem;
