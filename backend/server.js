const http =require('http');
const app =  require('./app');
const dotenv = require('dotenv');

dotenv.config();



const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`); 
});