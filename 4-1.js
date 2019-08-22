//4.       Write a function to reverse every word of a string.
//
//         Using split and reverse

var sampleStr = "Hello World";

function reverseWords(str) {
    return str.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
};
console.log(reverseWords(sampleStr));

