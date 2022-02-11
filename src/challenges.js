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

function ecode(element) {
  if (element === 'a') {
    element = '1';
  } else if (element === 'e') {
    element = '2';
  } else if (element === 'i') {
    element = '3';
  } else if (element === 'o') {
    element = '4';
  } else {
    element = '5';
  }
  return element;
}

function vogalE(element) {
  let table = ['a', 'e', 'i', 'o', 'u'];
  for (let char of table) {
    if (element === char) {
      element = ecode(element);
    }
  }
  return element;
}

function encode(term) {
  let code = [];
  for (let a = 0; a < term.length; a += 1) {
    let element = term[a];
    code.push(vogalE(element));
  }
  return code.join('');
}
console.log(encode('hi there!'));

function dcode(element) {
  if (element === '1') {
    element = 'a';
  } else if (element === '2') {
    element = 'e';
  } else if (element === '3') {
    element = 'i';
  } else if (element === '4') {
    element = 'o';
  } else {
    element = 'u';
  }
  return element;
}

function vogalD(element) {
  let table = ['1', '2', '3', '4', '5'];
  for (let char of table) {
    if (element === char) {
      element = dcode(element);
    }
  }
  return element;
}

function decode(term) {
  let code = [];
  for (let a = 0; a < term.length; a += 1) {
    let element = term[a];
    code.push(vogalD(element));
  }
  return code.join('');
}
console.log(decode('hi there!'));

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
