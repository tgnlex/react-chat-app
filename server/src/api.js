import express from 'express';
import morgan from 'morgan';
import {createWriteStream} from 'fs'
const app = express();

app.use(express.json())
app.use(express.urelencoded({extended: true})

app.use(morgan('combined', {stream: createWriteStream('../logs/morgan/requests.log')});

app.get('/', (req, res) => {
  res.json('Client connected.');
});

app.get('/dev')
export {app};
