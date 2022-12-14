import express from 'express';
import dotenv from "dotenv"

import route from "./route.js"

const app = express();
dotenv.config()

app.use(express.json())
app.use("/v1", route)

app.listen(process.env.APP__PORT || 5000, () => {
    console.log(`Server listening on port ${process.env.APP_PORT}`);
})