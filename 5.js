//5.       Write a function to remove duplicate strings from an array of strings.

const strArray = ['hello world', 'sky is blue', 'hello world'];

//method to remove duplicate strings
function removeDuplicateStrings(stringArr) {
  let uniqueStr = {};
  stringArr.forEach(function(i) {
    if(!uniqueStr[i]) {
      uniqueStr[i] = true;
    }
  });
  return Object.keys(uniqueStr);
}

removeDuplicateStrings(strArray);
