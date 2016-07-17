const style = require('./thing.css');

const div = document.createElement('div');
div.classList.add('thing');
div.textContent = 'I am a thing';
document.body.appendChild(div);
