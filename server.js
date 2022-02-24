const express = require("express");
const Database = require("./database.js");

const app = express();
app.use(express.json());

app.get("/data", (request,response)=>{
    return response.json({data: Database.Data})
});

app.get("/", (request, response) => {
    response.json({ message: "Server is working!!!!!!" });
});

app.listen(4000, () => console.log("Server is running"));