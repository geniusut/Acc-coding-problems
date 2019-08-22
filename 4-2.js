//4. Write a function to reverse every word of a string.
//
//   Without using split and reverse and in O(1) space

// sample input
const sampleCharArr = ['H','e','l','l','o',' ','W','o','r','l','d'];

// method to swap the characters
function swap_char(charArr, i, j) {
    let temp = charArr[i];
    charArr[i] = charArr[j];
    charArr[j] = temp;
    return charArr;
}

// method to reverse words
function reverse_words(charArr) {

    // index of first char of next word  
    let start_idx = 0;
    for (let i = 0; i < charArr.length; i++) {

        // check if current word ends  
        if (charArr[i] == ' ' ||
            i == charArr.length - 1) {

            // index of last char of current word  
            let end_idx;
            if (i == charArr.length - 1)
                end_idx = i;
            else
                end_idx = i - 1;

            // reverse the current word  
            while (start_idx < end_idx) {

                // swap the characters in 
                // the char array
                charArr = swap_char(charArr, start_idx, end_idx);
                start_idx++;
                end_idx--;
            }

            // index of first char of next word   
            start_idx = i + 1;
        }
    }

    return charArr;
}



reverse_words(sampleCharArr);
