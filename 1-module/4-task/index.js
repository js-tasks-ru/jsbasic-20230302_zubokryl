function checkSpam(str) {
  const spam1 = "1xBet";
  const spam2 = "XXX";
  
  if (str.toLowerCase().includes(spam1.toLowerCase()) || str.toLowerCase().includes(spam2.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}
