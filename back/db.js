import mysl from "mysql";

export const db = mysl.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: "jogos"
});