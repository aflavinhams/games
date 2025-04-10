import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Cadastro = () => {

    const navigate = useNavigate();
    const [newJogo, setNewJogo] = useState({ nome: "", descricao: "", tamanho: "", plataforma: "", classificacao: "", genero: "" });
    const [data, setData] = useState([]);
    

    useEffect(() => {
            fetch("http://localhost:8800")
              .then(response => response.json())
              .then(data => setData(data));
          }, []);

    function handleNewJogoChange(event) {
        const { name, value } = event.target;
        setNewJogo((prev) => ({ ...prev, [name]: value }));
    }

    function handleSaveNewJogo() {

        const camposVazios = Object.entries(newJogo).filter(([_, valor]) => valor.trim() === "");

        if (camposVazios.length > 0) {
          alert("Por favor, preencha todos os campos antes de adicionar o jogo.");
          return; // Impede o envio
        }

        fetch(`http://localhost:8800/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newJogo),
        })
          .then(response => response.json())
          .then(() => {
            alert("Novo jogo adicionado!.");
            setNewJogo({ nome: "", descricao: "", tamanho: "", plataforma: "", classificacao: "", genero: "" });
            window.location.reload();
          })
          .catch(error => console.error("Erro ao adicionar jogo:", error));
    }

    return(

        <div className="modal">
          <div className="modal-content">
            <h2>Adicionar Novo Jogo</h2>
            <label> Nome: </label>
            <input
              type="text"
              name="nome"
              value={newJogo.nome}
              onChange={handleNewJogoChange}
            />
            <label> Descrição: </label>
            <input
              type="text"
              name="descricao"
              value={newJogo.descricao}
              onChange={handleNewJogoChange}
            />
            <label> Tamanho: </label>
            <input
              type="text"
              name="tamanho"
              value={newJogo.tamanho}
              onChange={handleNewJogoChange}
            />
            <label> Plataforma: </label>
            <input
              type="text"
              name="plataforma"
              value={newJogo.plataforma}
              onChange={handleNewJogoChange}
            />
            <label> Classifição: </label>
            <input
              type="text"
              name="classificacao"
              value={newJogo.classificacao}
              onChange={handleNewJogoChange}
            />
            <label> Gênero: </label>
            <input
              type="text"
              name="genero"
              value={newJogo.genero}
              onChange={handleNewJogoChange}
            />
            <button onClick={handleSaveNewJogo} className="list-btn">Adicionar</button>
            <button onClick={() => navigate("/")} className="list-btn">Voltar</button>
          </div>
        </div>
    )
}   

export default Cadastro;