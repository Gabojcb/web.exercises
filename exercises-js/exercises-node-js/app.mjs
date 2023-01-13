import { sequelize, connectionAndConsult } from "./connection.js";
import express from "express";
// import {res} from "express/lib/response.js";

const app = express();
app.get("/",  async (req, res) => {
    // res.send("Hello world!");
    const data = await connectionAndConsult.defineModel;
    console.log(res.json(data));
    res.sendFile("C:/Users/Gabigol/Documents/workspace/exercises/exercises-js/exercises-node-js/index.html");
});

app.listen(3000, () => {
    console.log("server running on port", 3000);
});

sequelize.authenticate()
    .then(()=> {
        console.log("Conexion a la base de Datos");
    })
    .catch(error => {
        console.log("Error de conexion" + error);
    }); 

 

