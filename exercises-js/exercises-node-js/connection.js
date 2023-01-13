// import { response } from "express";
// import {res, json } from "express/lib/response";
import Sequelize  from "sequelize";
    

        const sequelize = new Sequelize("holamundo", "root", "mar.5009", {
            host:"localhost",
            dialect: "mysql",
            define: {
                timestamps:false
            }
        });
        
        let connectionAndConsult = {
            //Objeto que define el modelo de la tabla y recibe los datos de DataBase
           defineModel : function() {
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

                const resultTheModel = studentsModel.findAll({atributes:["id_students","name", "last_name", "age", "degree", "section", "id_school"]})
                const crud = JSON.stringify(resultTheModel);
                console.log(crud);
            },
                
        }        
    export {sequelize, connectionAndConsult };