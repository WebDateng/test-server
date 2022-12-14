import express from 'express';

const route = express.Router()

route.get('/', (req, res) => {
    res.send('Hello Index!');
})

route.get("/docs", (req, res) => {
    res.json([{"id" : 1, "name" : "Angga Adi", "email" : "anggaadi@gmail.com"},{"id" : 2, "name" : "Emon", "email" : "emon@gmail.com"}]);
})

export default route