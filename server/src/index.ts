import express from 'express';
import dotenv from 'dotenv';


// common configuration
const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 3000;



// listening to the port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})