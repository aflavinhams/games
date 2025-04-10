import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Detalhes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const itemClicked = location.state;

  if (!itemClicked) {
    return (
      <div className="modal-content">
        <p>Nenhum jogo selecionado.</p>
        <button onClick={() => navigate("/")} className="list-btn">
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>{itemClicked.nome}</h1>
        <p>Descrição: {itemClicked.descricao}</p>
        <button onClick={() => navigate("/")} className="list-btn">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Detalhes;
