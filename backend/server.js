import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

io.on('connection', (socket) => {
	console.log('A user connected');

	socket.on('message', (msg) => {
		console.log(`Message: ${msg}`);
		io.emit('message', msg);
	});

	socket.on('disconnect', () => {
		console.log('User disconnected');
	});
});

/* app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
}); */

server.listen(3000, () => {
	console.log('HTTP is running on http://localhost:3000');
});
