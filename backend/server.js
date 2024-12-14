const http =require('http');
const app =  require('./app');
const dotenv = require('dotenv');
const connectToDb = require('./db/db');

dotenv.config();

connectToDb();


const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`); 
});