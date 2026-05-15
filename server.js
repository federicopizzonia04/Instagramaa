const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

let usuarios = [];

app.post("/registro", (req, res) => {

    const { usuario, password } = req.body;

    usuarios.push({
        usuario,
        password
    });

    console.log(usuarios);

    res.json({
        mensaje: "Usuario registrado correctamente"
    });

});

app.listen(3000, () => {
    console.log("Servidor funcionando");
});