function toRoman(number) {
  var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  var arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var str = '';
  for (var i = arabic.length - 1; i >= 0; i--) {
    var counter = 0;
    while (number >= arabic[i]) {
      number -= arabic[i];
      counter++;
      str += roman[i];
    }
  }
  return str;
}

console.log(toRoman(9));
