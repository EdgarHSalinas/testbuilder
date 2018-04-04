// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var cardLength = cardNumber.length;
  var pre1 = cardNumber.slice(0,1);
  var pre2 = cardNumber.slice(0,2);
  var pre3 = cardNumber.slice(0,3);
  var pre4 = cardNumber.slice(0,4);
  var pre6 = cardNumber.slice(0,6);
 

  if (cardLength === 14 && pre2 === '38' || pre2 === '39') {
  	return "Diner's Club";
  }
  if (cardLength === 15 && pre2 === '34' || pre2 === '37') {
  	return 'American Express';
  }
  if ((cardLength === 13 || cardLength === 16 || cardLength === 19) && pre1 === '4') {
    return "Visa";
  }
  if (cardLength === 16 && cardRange(pre2, 51, 55)) {
  	return 'MasterCard';
  }
  if ((cardLength === 16 || cardLength === 19) && (pre4 === '6011' || cardRange(pre3, 644, 649)|| pre2 === '65')) {
    return "Discover";
  }
};

function cardRange(prefix, min, max) {
  return prefix >= min && prefix <= max;
}
