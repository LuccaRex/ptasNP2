const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();
app.use(express.json());

app.listen(4000, () => { console.log("tá rodando...")});

app.post("/cripto", async function cripto(req, res){
    const { password } = req.body;
    return res.send(password);
});