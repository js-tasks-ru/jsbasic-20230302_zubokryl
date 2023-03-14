function ucFirst(str) {
  if (str.length === 0 || str === ' ') {
    return "";
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}
