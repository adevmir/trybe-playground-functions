function compareTrue(a,b) {
        if (a === true && b === true) {
            return 'true';
        } else if (a === true && b === false) {
            return 'false';
        } else {
            return 'false';
        }
    }
  console.log(compareTrue(true,true));