import express from "express";
import amostraRoutes from "./routes/amostraRoutes.js";
import setoresRoutes  from "./routes/setoresRoutes.js";

const app = express();

app.use(express.json());

app.use("/amostra", amostraRoutes);
app.use("/setores", setoresRoutes);

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
})
