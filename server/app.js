import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT ?? 4000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("<h1>Hello Movies App</h1>");
})

app.post("/movies/create", (req, res) => {
    const requestBody = req.body;

    console.log("Movies created", requestBody);
    return res.json({
        message: 'Movie created'
    })
})

app.listen(PORT, () => {
    console.log(`Server started at port number ${PORT}`)
});