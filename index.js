// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const bolsaVanessa = [
  'cartão de crédito',
  'escova de cabelo',
  'perfume',
  'alcool em gel',
  'lenço de papel',
];
//indice começa em zero, indice for menor que o tamanho do array, vai iterando

for (let index = 0; index < bolsaVanessa.length; index++) {
  console.log(` ${index + 1} . ${bolsaVanessa[index]}`);
}
