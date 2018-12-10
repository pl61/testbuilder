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
  if (cardNumber.length === 14 && ['38', '39'].includes(cardNumber.substr(0, 2))) {
    return 'Diner\'s Club';
  } else if (cardNumber.length === 15 && ['34', '37'].includes(cardNumber.substr(0, 2))) {
    return 'American Express';
  } else if (cardNumber[0] === '4' && [13, 16, 19].includes(cardNumber.length)) {
    return 'Visa';
  } else if (cardNumber.length === 16 && ['51', '52', '53', '54', '55'].includes(cardNumber.substr(0, 2))) {
    return 'MasterCard';
  } else if ([16, 19].includes(cardNumber.length) && (['644', '645', '646', '647', '648', '649'].includes(cardNumber.substr(0, 3)) || cardNumber.substr(0, 2) === '65' || cardNumber.substr(0, 4) === '6011')) {
    return 'Discover';
  } else if (['5018', '5020', '5038', '6304'].includes(cardNumber.substr(0, 4)) && cardNumber.length >= 12 && cardNumber.length <= 19) {
    return 'Maestro';
  }
};
