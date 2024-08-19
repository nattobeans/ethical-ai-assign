import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';

import 'dotenv/config';

import router from './router';

const app = express();


app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.static('src/dist'))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const server = http.createServer(app);

if (process.env.NODE_ENV === 'production') {
    server.listen(process.env.PORT, () => {
        console.log(`Server running on ${process.env.PORT}`);
    });
}
else {
    server.listen(process.env.PORT || 8080, () => {
        console.log('Server running on http://localhost:8080/');
    });
}



const MONGO_URL = String(process.env.MONGODB_CONNECTION);

// mongodb+srv://Cluster68176:ERoenJdW1R8@cluster68176.w8x4s6a.mongodb.net

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());