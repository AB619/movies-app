import dotenv from 'dotenv';
import mongoose from 'mongoose';
import setupExpress from './config/express.js';

dotenv.config();

const { PORT, MONGO_DB_URI } = process.env;

const startServer = async () => {
    await mongoose.connect(MONGO_DB_URI);
    console.log('DB connected');
    const app = setupExpress();
    
    app.listen(PORT, () => {
        console.log(`Server started in port ${PORT}!`);
    });
};

try {
    if (!MONGO_DB_URI) {
        console.log(
            "Exiting: Please make sure that MONGO_DB_URI value is set!"
        );
        process.exit();
    }
    startServer();
} catch (error) {
    console.log("Bootstrapping the app server failed!", error);
}

/* app.get("/", (req, res) => {
    return res.send("<h1>Hello Movies App</h1>");
})

app.post("/movies/create", (req, res) => {
    const requestBody = req.body;

    console.log("Movies created", requestBody);
    return res.json({
        message: 'Movie created'
    })
}) */