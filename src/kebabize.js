/* Write a function kebabize(input) to convert a camel case input string into a kebab case.

The function only needs to take care of lower- and upper-case alphabets. Non-alphabetical characters (e.g. numbers, punctuation (_ - + ? )) can be ignored

Examples:
kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
*/

function kebabize(input) {
  var upperCaseChrPos = [];

  for (var i = 0; i < input.length; i++) {
    //find positions for upper case
    if (input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 90) {
      upperCaseChrPos.push(i);
    }
  }

  var strings = [];
  var start = 0;

  for (var i = 0; i < upperCaseChrPos.length; i++) {
    var end = upperCaseChrPos[i];
    strings.push(input.slice(start, end));
    start = end;
  }
  strings.push(input.slice(start));

  return strings.join("-").toLowerCase();
}

module.exports = kebabize;
