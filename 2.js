//2. Write a function which accepts an array of strings and 
//   returns a map of character to count of the character(including spaces and special characters).
//   Eg: input: [‘hello world’, ‘hello world’]  output: {h: 2, e: 2, l: 6, ‘ ‘: 1, o: 4 …… }

const str_array = ['hello world', 'hello world', 'abc', '&&', '  hello', 'afsks']; //sample input

function isKeyExists(result,item) { 
 return Object.keys(result).find(data => {
        return data == item;
    })
}
function char_count(array) {
    let result = {};

    // iterate over the array of strings
    array.forEach(data => {
        // split the word
        data.split('').map(item => {
            if (!Object.keys(result).length) {
                result[item] = 1;
            } else {
                // check if key is present in resultObj
                if (isKeyExists(result,item)) {
                    result[item] = result[item] + 1;
                } else {
                    result[item] = 1;
                }
            }
        })
    });
    return result;
}
char_count(str_array);

