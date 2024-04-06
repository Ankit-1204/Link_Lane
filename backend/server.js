import express from 'express';

import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from '../db/connectToMongoDB.js';
const app=express();
app.use(express.json());
app.use("/api/auth",authRoutes);

// app.get("/",(req,res)=>{
//     res.send("Hello World!!");
// });

app.listen(5000,()=>{
    connectToMongoDB();
    console.log('Server is running on port 5000');
});