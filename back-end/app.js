import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import sequelize from './database/db.js';
import postRoutes from './routes/postRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import './models/postModel.js';
import './models/categoryModel.js';
import './database/dbAssociations.js';



const app = express ();


app.use(express.json());

app.use(cors());



app.get('/', (req, res) => {
    res.send('Api is running')
});

app.use('/posts', postRoutes);
app.use('/categorys', categoryRoutes);


app.use(notFound);

app.use(errorHandler);

app.listen(5000,
        console.log('Corriendo en el puerto 5000'),
        ()=> {
            sequelize.sync()
            .then(() => {
                console.log('Connected to the database')
            })
            .catch(error => {
                console.log('An error ocurred: ', error);
            })
        });