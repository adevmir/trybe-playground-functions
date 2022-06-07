// Desafio 11
function phoneNumber(valid, array) {
  let result = '';
  if (valid > 2) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    array.splice(7, 0, '-');
    array.splice(2, 0, ' ');
    array.splice(2, 0, ')');
    result = `(${array.join('')}`;
  }
  return result;
}

function quantRepeat(array, repeat) {
  array.forEach((element) => {
    for (let cont = 0; cont < array.length; cont += 1) {
      if (element === array[cont]) {
        repeat += 1;
      }
    } if (repeat <= 2) {
      repeat = 0;
    }
  });
  return repeat;
}

function contnumber(array) {
  for (let a of array) {
    if (a > 9 || a < 0) {
      return 3;
    }
  }
  return quantRepeat(array, 0);
}

function generatePhoneNumber(array) {
  let result = '';
  if (array.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else {
    result = (phoneNumber(contnumber(array), array));
  }
  return result;
}

console.log(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
