function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  } else {
    var truncated = str.slice(0, maxlength).trim();
    return truncated + "...";
  }
}
