import './index.css';
import { MathLib } from './MathLib';

function setTitle (title) {
  document.getElementById('title').innerText = title;
}
setTitle('Uusi title');

const summa = (luku1, luku2) => {
  return luku1 + luku2;
}

const vahennys = (luku1, luku2) => {
  return luku1 - luku2;
}

const getLuku1 = () => Number(document.getElementById('luku1').value);
const getLuku2 = () => Number(document.getElementById('luku2').value);

document.getElementById('summa-btn').addEventListener('click', () => {
 setTitle(summa(getLuku1(), getLuku2()));
});

document.getElementById('vahennys-btn').addEventListener('click', () => {
 setTitle(vahennys(getLuku1(), getLuku2()));
});

document.getElementById('potenssi-btn').addEventListener('click', () => {
  setTitle(MathLib.power(getLuku1(), getLuku2()));
 });