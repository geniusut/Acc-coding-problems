// 3.Write a function to return all the keys present in an object at any level.
// Eg: input: {  a: 5, b: { c: { d: 10 } }}   output: [a, b, c, d]

const sampleObj = {
    a: 5,
    b: {
        c: {
            d: 10
        }
    }
}
let keyArr = [];
// to return all the keys present in an object at any level.
function getAllKeys(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            keyArr.push(key);
            getAllKeys(obj[key]);
        } else {
            keyArr.push(key);
        }
    }
    return  keyArr;
}

getAllKeys(sampleObj); 
