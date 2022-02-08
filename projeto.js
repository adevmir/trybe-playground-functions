function compareTrue(a,b) {
        if (a && b === true) {
            return 'true';
        } else if (a && b === false) {
            return 'false';
        } else {
            return 'false';
        }
    }
  console.log(compareTrue(true,true));