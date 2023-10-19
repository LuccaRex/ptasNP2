const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();
app.use(express.json());

app.listen(4000, () => { console.log("tá rodando...")});

app.post("/cripto", async function cripto(req, res){
    const { password } = req.body;
    const newpassword = await bcrypt.hash(password, 10);
    return res.send(newpassword);
});

app.post("/descripto", async function descripto(req, res){
    const { password, newpassword } = req.body;
    const response = await bcrypt.compare(password, newpassword);
    return res.send(response);
});