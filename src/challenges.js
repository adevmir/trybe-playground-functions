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
      quant = 0;
    }
    if (maior === inic) {
      quant += 1;
    }
  }
  return quant;
}
console.log(highestCount([6, 6, 9, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(cat2 - mouse);
  let result = '';
  if (cat1 < cat2) {
    result = 'cat1';
  } else if (cat1 > cat2) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
console.log(catAndMouse(5, 7, 6));

// Desafio 8
function fizzBuzzDivisor(element) {
  if (element === 3) {
    element = 'fizzBuzz';
  } else if (element === 1) {
    element = 'fizz';
  } else if (element === 2) {
    element = 'buzz';
  } else {
    element = 'bug!';
  }
  return element;
}

function fizzBuzz(array) {
  let divisor = [];
  for (let a of array) {
    let element = 0;
    if (a % 3 === 0) {
      element += 1;
    } if (a % 5 === 0) {
      element += 2;
    }
    divisor.push(fizzBuzzDivisor(element));
  }
  return divisor;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(term) {
  let code = [];
  for (let a = 0; a < term.length; a++) {
    if (term[a] === 'a') {
      code[a] = '1';
    } else if (term[a] === 'e') {
      code[a] = '2';
    } else if (term[a] === 'i') {
      code[a] = '3';
    } else if (term[a] === 'o') {
      code[a] = '4';
    } else if (term[a] === 'u') {
      code[a] = '5';
    } else {
      code[a] = term[a];
    }
  }
  return code.join('');
}
console.log(encode('hi there!'));

function decode(code) {
  let dcode = [];
  for (let a = 0; a < code.length; a += 1) {
    if (code[a] === '1') {
      dcode[a] = 'a';
    } else if (code[a] === '2') {
      dcode[a] = 'e';
    } else if (code[a] === '3') {
      dcode[a] = 'i';
    } else if (code[a] === '4') {
      dcode[a] = 'o';
    } else if (code[a] === '5') {
      dcode[a] = 'u';
    } else {
      dcode[a] = code[a];
    }
  }
  return dcode.join('');
}
console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(array, nome) {
  let result = [];
  if (array === undefined || array === null || array.length === 0) {
    result = 'Vazio!';
  }
  for (let int of array.sort()) {
    result.push({ tech: int, name: nome });
  }
  return result;
}
console.log(techList(['React', 'Just', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
