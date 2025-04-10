import {db} from "../db.js";

export const getJogos = (_, res) => {
    const q = "SELECT * FROM jogos";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
} 

export const insertJogos = (req, res) => {
    const q = "INSERT INTO jogos (nome, descricao, tamanho, plataforma, classificacao, genero) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(q, [req.body.nome, req.body.descricao, req.body.tamanho, req.body.plataforma, req.body.classificacao, req.body.genero], (err, _) => {
        if (err) return res.json(err);
        return res.status(200).json({message: "Jogo adicionado"});
    })
}

export const updateJogos = (req, res) => {
    const q = "UPDATE jogos SET nome = ?, descricao = ?, tamanho = ?, plataforma = ?, classificacao = ?, genero = ? WHERE id = ?";
    db.query(q, [req.body.nome, req.body.descricao, req.body.tamanho, req.body.plataforma, req.body.classificacao, req.body.genero , req.params.id], (err, _) => {
        if (err) return res.json(err);
        return res.status(200).json({message: "Jogo atualizado"});
    })
}

export const deleteJogos = (req, res) => {
    const q = "DELETE from jogos WHERE id = ?";
    db.query(q, [req.params.id], (err, _) => {
        if (err) return res.json(err);
        return res.status(200).json({message: "Jogo deletado"});
    });
}