//Whiteboarding Problems AA Practice Part 3 (#41 - 60)

const {isPrime} = require("./problems-part1.js");


//threeIncreasing(arr) returns true if the array contains 3 consecutive numbers in increasing order
//Expected: O(n) time complexity, O(1) space complexity
function threeIncreasing(array){
    for(let i = 1; i < array.length - 1; i++){
        if(array[i] === array[i - 1] + 1 && array[i] === array[i + 1] - 1){
            return true;
        }
    }
    return false;
}
// console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));   //true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));    //false
/**************************************************************************/

//reverse2D takes in a 2D array of strings and returns a string representing the elements
    //of the array in reverse order
//Expected: O(n^2) time complexity, O(n) space complexity
const reverse2D = (array) => {
    let string = "";

    for(let i = array.length - 1; i >= 0; i--){
        let subArray = array[i];
        for(let j = subArray.length - 1; j >= 0; j--){
            string+= subArray[j];
        }
    }
    //console.log(string);
    return string;
};

// const arr1 = [
//     ['a', 'b', 'c', 'd'],
//     ['e', 'f'],
//     ['g', 'h', 'i']
// ];
// reverse2D(arr1); // => 'ihgfedcba'

// const arr2 = [
//     ['Julian', 'Matt', 'Mike'],
//     ['Oscar', 'Patrick']
// ];
// reverse2D(arr2); //=> 'PatrickOscarMikeMattJulian'
/**************************************************************************/

//reverb(word) returns the input word with all characters after last vowel repeated
//Expected: O(n) time complexity, O(1) space complexity
function reverb(word){
    let vowels = 'aeiou';
    let string = word;
    for(let i = word.length - 1; i >= 0; i--){
        if(vowels.includes(word[i])){
            let ending = word.substring(i);
            return string + ending;
        }
    }
    return string;
}
// console.log(reverb('running')); // => 'runninging'
// console.log(reverb('wild')); // => 'wildild'
// console.log(reverb('debugged')); // => 'debuggeded'
// console.log(reverb('my')); // => 'my'
/**************************************************************************/

//countRepeats(string) returns the number of letters that appear more than once in the string
    //Assume string contains only lowercase letters. Count how many letters repeat, not the number of times they repeat
//Expected: O(n^2)? time complexity, o(1) space complexity
function countRepeats(string){
    let wordObj = {}
    let count = 0;

    for(let i = 0; i < string.length; i++){
        if(string[i] in wordObj){

            if(wordObj[string[i]] === 1){
                count++;
            }

            wordObj[string[i]]++;
        }
        else{
            wordObj[string[i]] = 1;
        }
    }
    //console.log(count);
    return count;
}
// countRepeats('calvin');          //0
// countRepeats('caaaalvin');       //1
// countRepeats('pops');            //1
// countRepeats('mississippi');     //3
// countRepeats('hellobootcampprep');   //4
/**************************************************************************/

//pairsToString(arr) takes in an array of pairs and returns a string containing characters corresponding to the pairs
//Expected: O(n^2) time complexity, O(n) space complexity
function pairsToString(array){
    let result = "";
    for(let i = 0; i < array.length; i++){
        let value = array[i][1];
        for(let j = 0; j < value; j++){
            result += array[i][0];
        }
    }
    //console.log(result);
    return result;
}

// const array1 = [
//     ['a', 3],
//     ['b', 1],
//     ['c', 2]
// ];
// pairsToString(array1);  //'aaabcc'

// const array2 = [
//     ['f', 1],
//     ['o', 2],
//     ['d', 1],
//     ['!', 1]
// ];
// pairsToString(array2);  //'food!'
/**************************************************************************/

/***not done yet************** */
//countAdjacentSums(arr, n) counts the number of times that two adjacent numbers add up to "n"
//Expected: O(n) time complexity, O(1) space complexity
function countAdjacentSums(arr, n){
    let count = 0;
    for(let i = 0; i < arr.length - 1; i++){
        let j = i + 1;
        if(arr[i] + arr[j] === n){
            count++;
        }
    }
    //console.log(count);
    return count;
}

// countAdjacentSums([1, 5, 1], 6);       // => 2
// countAdjacentSums([7, 2, 4, 6], 7);       // => 0
// countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13);       // => 3
/**************************************************************************/

//signFlipCount(nums) returns the number of times adjacent numbers switch signs (pos to neg or neg to pos)
    //0 does not count as positive or negative
//Expected: O(n) time complexity, O(1) space complexity
function signFlipCount(nums){
    let count = 0;
    let prevIsPos = nums[0] > 0;
    let currIsPos;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] === 0) continue;

        currIsPos = (nums[i] > 0);  //true if > 0, false if < 0

        if(currIsPos !== prevIsPos){
            count++;
        }

        prevIsPos = currIsPos;

    }
    //console.log(count);
    return count;
}

// signFlipCount([5, 6, 10, 3]); // => 0
// signFlipCount([-12, 0, -3, 10]); // => 1
// signFlipCount([-1, 11.3, -3, 100]); // => 3
// signFlipCount([-1, 11.3, 0, 100, 0, 4, -4, 0, -1]); // => 2


/**************************************************************************/

//powerSequence(base, length) returns na array containing a power sequence with the given length
    //assume length >= 1
//Expected: O(n) time complexity, O(n) space complexity
function powerSequence(base, length){
    let array = [base];

    for(let i = 1; i < length; i++){
        array[i] = array[i - 1] * base;
    }
    // console.log(array);
    return array;
}

// powerSequence(3, 4);    // => [3, 9, 27, 81]
// powerSequence(2, 6);    // => [2, 4, 8, 16, 32, 64]
// powerSequence(8, 3);    // => [8, 64, 512]
/**************************************************************************/

//collapseString(str) returns a string where consecutive characters in "str" are collapsed to a single character
//Expected: O(n) time complexity, O(n) space complexity

function collapseString(str){
    let string = str[0];
    let savedChar = string[0];

    for(let i = 0; i < str.length; i++){
        let currentChar = str[i];
        if(currentChar === savedChar) continue;
        else{
            string+= currentChar;
            savedChar = currentChar;
        }
    }
    //console.log(string);
    return string;
}

// collapseString('apple');    //=> 'aple;
// collapseString('AAAaalviiiiin!!!!');    //=> 'Aalvin!'
// collapseString('hello   app academy');  //=> 'helo ap academy'
/**************************************************************************/

//oddWordsOut(sentence) returns the sentence where words with odd number of chars are removed
//Expected: O(n) time complexity, O(n) space complexity
function oddWordsOut(sentence){
    let array = sentence.split(" ");

    const evenArray = array.filter( (word) => word.length % 2 === 0);
    // console.log(evenArray.join(' '));
    return evenArray.join(" ");
}

// oddWordsOut('go to the store and buy milk');    // => 'go to milk'
// oddWordsOut('what is the answer');              // => 'what is answer'
/**************************************************************************/

//mindPsAndQs(str) takes in a "str" of uppercase letters, returns the length of the longest
    //consecutive streak of the letters 'P' and 'Q'
//hint: use two variables, 1 to track the length of the current streak, 1 to track length of
    //longest streak so far
//Expected: O(n) time complexity, O(1) space complexity
function mindPsAndQs(str){
    let longestStreak = 0;
    let currentStreak = 0;

    for( let i = 0; i < str.length; i++){
        if(str[i] === 'P' || str[i] === 'Q'){
            currentStreak++;

            if(currentStreak> longestStreak){
                longestStreak = currentStreak;
            }
        }
        else{
            currentStreak = 0;
        }
    }
    //console.log(longestStreak);
    return longestStreak;
}

mindPsAndQs('BOOTCAMP');     //=> 1
mindPsAndQs('APCDQQPPC');    //=> 4
mindPsAndQs('PQPQ');         //=> 4
mindPsAndQs('PPPXQPPPQ');    //=> 5

/**************************************************************************/

//commonFactors(num1, num2) returns an array that contains the common factors between both numbers
//Expected:  O(n) time complexity, O(n) space complexity
function commonFactors(num1, num2){
    let smallerNum = num1 < num2 ? num1 : num2;

    let array = [];
    for(let i = 1; i <= smallerNum; i++){
        if(num1 % i === 0 && num2 % i === 0){
            array.push(i);
        }
    }

    //console.log(array);
    return array;
}

// commonFactors(12, 50);  // => [1, 2]
// commonFactors(6, 24);  // => [1, 2, 3, 6]
// commonFactors(11, 22);  // => [1, 11]
// commonFactors(45, 60);  // => [1, 3, 5, 15]
/**************************************************************************/

//commonPrimeFactors(num1, num2) returns an array of all prime factors of both num1 and num2
//Expected: O(n) time complexity, O(n) space complexity
function commonPrimeFactors(num1, num2){
    let smallerNum = num1 < num2 ? num1 : num2;

    let array = [];
    for(let i = 1; i <= smallerNum; i++){
        if(isPrime(i) && num1 % i === 0 && num2 % i === 0){
            array.push(i);
        }
    }
    //console.log(array);
    return array;
}
// commonPrimeFactors(12, 50);  // => [2]
// commonPrimeFactors(6, 24);  // => [ 2, 3 ]
// commonPrimeFactors(11, 22);  // => [ 11]
// commonPrimeFactors(45, 60);  // => [3, 5]
/**************************************************************************/

//splitHalfArray(array) returns an array containing two halves of og "array"
    //if "array" has an odd number of elements, the middle element should be excluded from both halves
//Expected: O(n) time complexity (slice is O(n)), O(n) space complexity
function splitHalfArray(array){
    let myArray = [];
    let middle = array.length / 2;

    myArray.push(array.slice(0, middle));
    myArray.push(array.slice(Math.ceil(middle), array.length));

    //console.log(myArray);
    return myArray;
}

// splitHalfArray([1, 2, 3, 4, 5]);    // => [[1, 2], [4, 5]]
// splitHalfArray(['a', 'b', 'c', 'd', 'e','f']);  //=> [['a', 'b', 'c'], ['d', 'e', 'f']]
/**************************************************************************/

//threeUniqueVowels(string) returns true if string comtains at least 3 unique vowels, false if otherwise
//Expected: O(n) time complexity, O(1) space complexity
function threeUniqueVowels(string){
    let vowels = 'aeiou';
    let vowelCount = 0;
    for(let i = 0; i < string.length; i++){
        if(vowels.includes(string[i])){
            vowelCount++;
            let index = vowels.indexOf(string[i]);
            vowels = vowels.substring(0, index) + vowels.substring(index + 1, vowels.length);
        }
    }
    //console.log(vowelCount >= 3);
    return vowelCount >= 3;
}

// threeUniqueVowels('delicious'); //true
// threeUniqueVowels('bootcamp'); //false
// threeUniqueVowels('go home'); //false
// threeUniqueVowels('the bootcamp'); //true

/**************************************************************************/

//vowelShift(sentence) returns a new sentence where every vowel is replaced with the next vowel in the alphabet
//Expected: O(n) time complexity, O(n) space complexity
function vowelShift(sentence){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let myArray = [];

    for(let i = 0; i < sentence.length; i++){
        if(vowels.includes(sentence[i])){
            let index = vowels.indexOf(sentence[i]);
            if(index === 4) index = -1;
            myArray.push(vowels[index + 1]);
        }
        else{
            myArray.push(sentence[i]);
        }
    }
    // console.log(myArray.join(""));
    return myArray.join("");
}

// vowelShift('bootcamp'); //=> 'buutcemp'
// vowelShift('hello world');  // => 'hillu wurld'
// vowelShift('on the hunt');  // => "un thi hant"
/**************************************************************************/

//hasSymmetry(array) return true if array is the same forwards and backwards
    //remember: cannot check arrays for equality (===)
//Expected: O(n) time complexity, O(1) space complexity
function hasSymmetry(array){
    let end = array.length - 1;

    for(let i = 0; i < end / 2; i++){
        if(array[i] !== array[end - i]){
            //console.log("false");
            return false;
        }
    }
    //console.log(true);
    return true;
}

// hasSymmetry([1, 2, 3, 2, 1]);   //true
// hasSymmetry([1, 2, 3, 3, 4, 1]);    //false
// hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']);  //true
// hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']); //false
// hasSymmetry(['cat', 'dog', 'bird', 'bird', 'dog', 'cat']); //true

// /**************************************************************************/

//evenSumArray(array) returns a new array where each num is replaced with the sum of all even nums
    //less than or equal to that num
//Expected: O(n^2) time complexity, O(n) space complexity
function evenSumArray(array){
    let myArray = [];
    for(let i = 0; i < array.length; i++){
        let sum = 0;
        for(let j = 2; j <= array[i]; j++){
            if(j % 2 === 0) sum+= j;
        }
        myArray.push(sum);
    }
    //console.log(myArray);
    return myArray;
}

// evenSumArray([6, 7, 5]);    //[12, 12, 6]
// evenSumArray([2, 8, 3, 5]); //[2, 20, 2, 6]

// /**************************************************************************/


//numsToWords(numString) takes in a string representing a number, returns a string
    //spelling out the number. Assume input string only contains numeric characters ('42' -> 'FourTwo')
//Expected: O(n) time complexity, O(n) space complexity
    function numsToWords(numString){
    const numbersToWords = {1: 'One', 2: 'Two', 3: 'Three', 4: 'Four',
                            5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight',
                            9: 'Nine', 0: 'Zero'};
    let myString = '';
    for(let i = 0; i < numString.length; i++){
        let num = numString[i];
        myString += numbersToWords[num];
    }
    //console.log(myString);
    return myString;
}

// numsToWords('42');  //'FourTwo'
// numsToWords('123'); //'OneTwoThree'
// numsToWords('159598');  //'OneFiveNineFiveNineEight'

/**************************************************************************/

//moreDotLessDash(str) returns true if there are more "." than "-", false otherwise
//Expected: O(n) time complexity, O(1) space complexity
function moreDotLessDash(str){
    let dots = 0
    let dashes = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === ".") dots++;
        if(str[i] === "-") dashes++;
    }
    //console.log(dots > dashes);
    return dots > dashes;
}

// moreDotLessDash('2-D arrays are fun. I think.');    //true
// moreDotLessDash('.-.-.');   //true
// moreDotLessDash('..--');    //false
// moreDotLessDash('..---');   //false
