import express from 'express';
import http from 'http';
import path from 'path';

const app = express();

// lets heroku choose the port
let port = process.env.PORT || 5002;
app.set('port', port);

// create HTTP server
let server = http.createServer(app);

// Listen on provided port
server.listen(port);

// Logging
server.on('error', () => {
    console.log('Server error');
});
server.on('listening', () => {
    console.log(`Listening on port ${port}`);
});

const __dirname = path.resolve();

app.use('/', express.static(path.join(__dirname, 'public')));

console.log(path.join(__dirname, 'public'));
// show index.html
app.get('/', (request, response) => {
    response.render('/');
});