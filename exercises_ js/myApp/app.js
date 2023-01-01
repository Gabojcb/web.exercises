//Creando un servidor

const express = require("express");
const Sequelize = require("sequelize");

const { dirname } = require("path");
const path = require("path");
const { json } = require("express/lib/response");

const app = express();
app.get("/", (req, res) => {
    // res.send("Hello world!");
    res.sendFile(path.join(__dirname + "/index.html"));
});

//Conexion a la base de datos
const sequelize = new Sequelize("holamundo", "root", "mar.5009", {
    host:"localhost",
    dialect: "mysql",
    define: {
        timestamps:false
    }
});

//defino el modelo de la tabla
const studentsModel = sequelize.define("students",{
    //datos
    "id_students":{type:Sequelize.INTEGER, primaryKey:true},
    "name":Sequelize.STRING,
    "last_name":Sequelize.STRING,
    "age": Sequelize.NUMBER,
    "degree": Sequelize.NUMBER,
    "section": Sequelize.STRING,
    "id_school":{type:Sequelize.INTEGER, foreignkey:true}
});

sequelize.authenticate()
    .then(()=> {
        console.log("Conexion a la base de Datos");
    })
    .catch(error => {
        console.log("Error de conexion" + error);
    });
    
    studentsModel.findAll({atributes:["id_students","name", "last_name", "age", "degree", "section", "id_school"]})
        .then(students => {
            const result = JSON.stringify(students);
            console.log(result);
        })
        .catch(error => {
            console.log(error + "error de serve");
        })

app.listen(3000, () => {
    console.log("server running on port", 3000);
});
