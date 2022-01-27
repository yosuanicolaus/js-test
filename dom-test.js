const container = document.querySelector(`#container`);

const p = document.createElement('p');
p.textContent = `Hey, I'm red!`;
p.style.color = `red`;

container.appendChild(p);