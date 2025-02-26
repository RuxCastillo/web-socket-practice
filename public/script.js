const socket = io('ws://localhost:3000');

const input = document.getElementById('input');
const form = document.getElementById('form');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	socket.emit('message', input.value);
	input.value = '';
});

socket.on('message', (msg) => {
	const item = document.createElement('li');
	item.textContent = msg;
	messages.appendChild(item);
	window.scrollTo(0, document.body.scrollHeight);
});
