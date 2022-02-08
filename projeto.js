function compareTrue(a,b) {
        if (a === true && b === true) {
            return 'ambos são verdadeiros';
        } else if (a === true && b === false) {
            return 'a é verdadeiro, mas b é falso';
        } else if (a === false && b === true) {
            return 'b é verdadeiro, Mas a é falso';
        } else {
            return 'Ambos são falsos';
        }
    }
  console.log(compareTrue(true,false));