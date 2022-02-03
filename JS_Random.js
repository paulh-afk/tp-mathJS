let nb1;
let nb2;

window.onload = function () {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'lightgreen';
  nb1 = document.getElementById('nb1').value;
  nb2 = document.getElementById('nb2').value;
};

function pi() {
  document.getElementById('pi').value = Math.PI;
}

function alea01() {
  document.getElementById('alea01').value = Math.random();
}

function alea08float() {
  document.getElementById('alea08float').value = 8 * Math.random();
}

function alea08ent() {
  document.getElementById('alea08ent').value = Math.round(8 * Math.random());
}

function alea1020ent() {
  document.getElementById('alea1020ent').value = 10 + Math.round(10 * Math.random());
}

function tronc3Nb1() {
  document.getElementById('tronc3Nb1').value = Math.round(1000 * nb1) / 1000;
}

function arr1Nb1() {
  document.getElementById('arr1Nb1').value = Math.round(10 * nb1) / 10;
}

function arr1Nb2() {
  document.getElementById('arr1Nb2').value = Math.round(10 * nb2) / 10;
}

function aleaAH() {
  const tab = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  document.getElementById('aleaAH').value = tab[Math.floor(Math.random() * tab.length)];
}
