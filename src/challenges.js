// Desafio 1
function compareTrue(a, b) {
  return a && b;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(a) {
  return `${a[(a.length - 1)]}, ${a[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(a) {
  let inic = a[0];
  let quant = 0;
  for (let maior of a) {
    if (maior > inic) {
      inic = maior;
    }
  }
  for (let maior of a) {
    if (maior === inic) {
      quant++;
    }
  }
  return quant;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse > cat1){
    cat1 = mouse - cat1;
  }
  else {
    cat1 = cat1 - mouse;
  }
  if (mouse > cat2){
    cat2 = mouse - cat2;
  }
  else {
    cat2 = cat2 - mouse;
  }
  if (cat1 < cat2){
    return 'cat1';
  } else if (cat1 > cat2){
    return 'cat2';
  } else {
    return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(5, 3, 7));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
