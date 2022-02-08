function compareTrue(a, b) {
  if (a && b === true) {
    return 'true';
  }
  return 'false';
}
console.log(compareTrue(false, true));
