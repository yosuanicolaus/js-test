const container = document.querySelector(`#container`);

const p = document.createElement(`p`);
p.textContent = `Hey, I'm red!`;
p.style.color = `red`;

container.appendChild(p);

const h3 = document.createElement(`h3`);
h3.textContent = `I'm a blue h3!`;
h3.style.color = `blue`;
h3.style.background = `orange`;

container.appendChild(h3);

const div = document.createElement(`div`);
div.style.background = `pink`;
div.style.border = `2px dotted black`;

const h1 = document.createElement(`h1`);
h1.textContent = `I'm in a div`;

const newP = document.createElement(`p`);
newP.textContent = `Me too!`;

div.appendChild(h1);
div.appendChild(newP);

container.appendChild(div);