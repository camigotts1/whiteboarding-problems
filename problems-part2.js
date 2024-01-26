//Whiteboarding Problems AA Practice Part 2 (#21 - 40)

const {isPrime} = require("./problems-part1.js");

//countInnerElement(arr) takes a 2D-array, returns an object that counts how many
    //of each element is repeated. Assume each subArray has at least 1 element, but
    //subArrays are not necessarily the same length
//Expected: O(n^2) time complexity, O(n) space complexity
function countInnerElement(arr){
    let countObj = {};

    arr.forEach( (subArray) => {
        for(let i = 0; i < subArray.length; i++){
            if(subArray[i] in countObj){
                countObj[subArray[i]]++;
            }
            else{
                countObj[subArray[i]] = 1;
            }
        }
    });
    //console.log(countObj);
    return countObj;
}
// const arr1 = [
//     [1, 2, 4, 5],
//     [2, 7, 4],
//     [1, 4, 5, 2, 7]
//   ]
//   countInnerElement(arr1)  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

//   const arr2 = [
//     ['a','b','c','d'],
//     ['a','b'],
//     ['a','c','d','a']
//   ]
//   countInnerElement(arr2)  // => {a: 4, b: 2, c: 2, d: 2}
/**************************************************************************/

//twoDiff(array) returns a 2D-array where each sub array are indices of two numbers
    //whose difference is 2
//Expected: O(n^2) time complexity, O(n) space complexity
const twoDiff = (array) => {
    let result = [];

    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if((array[i] - array[j]) === 2 ||
                array[j] - array[i]  === 2){
                result.push([i, j]);
            }
        }
    }
    //console.log(result);
    return result;
};
// twoDiff([2, 3, 4, 6, 1, 7])  // => [[0, 2], [1, 4], [2, 3]]
// twoDiff([0, 2, 4, 3, 5])  // => [[0, 1], [1, 2], [3,4]]
// twoDiff([])  // => []
/**************************************************************************/

//arrayDiff(arr1, arr2) returns a new array containing elements of arr1 that are
    //not also in arr2
//Expected: O(n) time complexity, O(n) space complexity
const arrayDiff = (arr1, arr2) => {
    let result = [];
    for(let i = 0; i < arr1.length; i++){
        if(!(arr2.includes(arr1[i]))){
            result.push(arr1[i]);
        }
    }
    //console.log(result);
    return result;
};
// const array1 = [1, 23, 2, 43, 3, 4]
// const array2 = [3, 23]
// arrayDiff(array1, array2)  // => [1, 2, 43 ,4]

// const array3 = ['a', 'ab', 'c', 'd', 'c']
// const array4 = ['d']
// arrayDiff(array3, array4)  // => ['a', 'ab', 'c', 'c']
/**************************************************************************/

//valueCounter(obj, val) returns the number of times "val" is repeated as a value in "obj"
//Expected: O(n) time complexity, O(1) space complexity
const valueCounter = (obj, val) => {
    let count = 0;
    for(const key in obj){
        if(obj[key] === val){
            count++;
        }
    }
    //console.log(count);
    return count;
};
// const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
// valueCounter(obj1, 'Anne')  // => 3

// const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
// valueCounter(obj2, 88)  // => 0

// const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
// valueCounter(pairs, 'Roman')  // => 2
/**************************************************************************/

//elementCount(array) returns an object, where each key corresponds to an element  in
    //the array, and each value counts how many times that element appears in the array
//Expected: O(n) time complexiy, O(n) space complexity
const elementCount = (array) => {
    let countObj = {};

    for(let i = 0; i < array.length; i++){
        if(array[i] in countObj){
            countObj[array[i]]++;
        }
        else{
            countObj[array[i]] = 1;
        }
    }
   // console.log(countObj);
    return countObj;
};
// elementCount(["a", "a", "b", "b"]); // => { "a" : 2, "b" : 2 }
// elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }
/**************************************************************************/

//nextTwoPrimes(num) returns the next 2 primes greater than num
//Expected: O(n) time complexity, O(1) space complexity
const nextTwoPrimes = (num) => {
    let primeArray = [];
    let i = num + 1;
    while(primeArray.length < 2){
        if(isPrime(i)){
            primeArray.push(i);
        }
        i++;
    }

    console.log(primeArray);
    return primeArray;
};

// nextTwoPrimes(2);  // => [ 3, 5 ]
// nextTwoPrimes(20);  // => [ 23, 29 ]
// nextTwoPrimes(97);  // => [ 101, 103 ]
/**************************************************************************/

//pairProduct(arr, num) takes in an array of numbers. Returns all pairs of indices
    //where two numbers multiply to "num"
    //Constraint: Use while loops, no for loops
//Expected: O(n^2) time complexity, O(n) space complexity
const pairProduct = (arr, num) => {
    let pairArray = [];
    let i = 0;
    let j = 1;

    while(i < arr.length - 1){
        while(j < arr.length){
            if(arr[i] * arr[j] === num){
                pairArray.push([i, j]);
            }
            j++;
        }
        i++;
        j = i + 1;
    }
    //console.log(pairArray);
    return pairArray;
};

// pairProduct([1, 2, 3, 4, 5], 4); // => [ [ 0, 3 ] ]
// pairProduct([1, 2, 3, 4, 5], 8); // => [ [ 1, 3 ] ]
// pairProduct([1, 2, 3, 12, 8], 24); // => [ [ 1, 3 ], [ 2, 4 ] ]
/**************************************************************************/

//twoDimensionalSize(array) returns the total number of elements in 2D array "array"
//Expected: O(n) time complexity, O(1) size complexity
function twoDimensionalSize(array){
    let length = 0;
    array.forEach( (subArray) => {
        length += subArray.length;
    });
    //console.log(length);
    return length;
}
// const arr1 = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8, 9]
//   ];
//   twoDimensionalSize(arr1);  // => 9

//   const arr2 = [
//     ['a'],
//     ['b', 'c', 'd', 'e']
//   ];
//   twoDimensionalSize(arr2);  // => 5
/**************************************************************************/

//longWordCount(string) returns the number of words with over 7 characters
//Expected: O(n) time complexity, O(1) space complexity
function longWordCount(string){
    let words = string.split(" ");
    let count = 0;

    for(let i = 0; i < words.length; i++){
        if(words[i].length > 7){
            count++;
        }
    }
    //console.log(count);
    return count;
}
// longWordCount("");  // => 0
// longWordCount("one reallylong word");  // => 1
// longWordCount("allwordword longwordword wordswordword");  // => 3
// longWordCount("seventy schfifty five");  // => 1
/**************************************************************************/


//factorial(n) returns the factorial of number n
//Expected: O(n) time complexity, O(1) space complexity
/*************can improve time with memos, sacrifices space******** */
function factorial(n){
    if(n === 0 || n === 1) return 1;

    return n * factorial (n - 1);
}
// factorial(1);  // => 1
// factorial(4);  // => 24
// console.log(factorial(5));  // => 120
// console.log(factorial(10));  // => 3628800
/**************************************************************************/

//lcm(num1, num2) returns the lowest number which is a multiple of both num1 and num2
//Expected: O(n)? time complexity, O(1) space complexity
function lcm(num1, num2){
    let lcm = num1 * num2;
    let biggerNum = num1 > num2 ? num1 : num2;
    let smallerNum = num1 < num2 ? num1 : num2;

    for(let i = biggerNum; i < lcm; i+= biggerNum){
        if(i % smallerNum === 0){
            lcm = i;
            break;
        }
    }
    //console.log(lcm);
    return lcm;
}
// lcm(2, 3);  // => 6
// lcm(6, 10);  // => 30
// lcm(24, 26);  // => 312
/**************************************************************************/

//hipsterfyWord(word) takes in a string and returns the string with the last vowel removed (except y)
//Expected: O(n) time complexity; O(n) space complexity
function hipsterfyWord(word){
    let vowels = 'aeiouAEIOU';
    let wordArray = word.split("");

    for(let i = wordArray.length - 1; i >= 0; i--){
        if(vowels.includes(wordArray[i])){
            wordArray.splice(i, 1);
            break;
        }
    }
    //console.log(wordArray.join(""));
    return wordArray.join("");
}

// hipsterfyWord('proper') // => 'propr'
// hipsterfyWord('tonic') // => 'tonc'
// hipsterfyWord('PANTHER') // => 'PANTHR'
// hipsterfyWord('BACKWARDS') // => 'BACKWRDS'

/**************************************************************************/

//hipsterfy(sentence) removes the last vowel from each word in a sentence (except y)
//Expected: O(n^2) time complexity, O(n) space complexity
function hipsterfy(sentence){
    let words = sentence.split(" ");

    for(let i = 0; i < words.length; i++){
        words[i] = hipsterfyWord(words[i]);
    }
    //console.log(words.join(" "));
    return words.join(" ");
}

// hipsterfy("proper");  // => "propr"
// hipsterfy("proper tonic panther");  // => "propr tonc panthr"
// hipsterfy("towel flicker banana");  // => "towl flickr banan"
// hipsterfy("runner anaconda");  // => "runnr anacond"
// hipsterfy("turtle cheeseburger fries");  // => "turtl cheeseburgr fris"

/**************************************************************************/

//objectToString(count) takes in a char count object and returns a string representing the counts of each char
//Expected: O(n^2) time complexity, O(n) space complexity
function objectToString(count){
    let myString = "";
    for(char in count){
        let value = count[char];
        for(let i = 0; i < value; i++){
            myString += char;
        }
    }
    //console.log(myString);
    return myString;
}
// objectToString({ a : 2, b: 4, c: 1 }) // => 'aabbbbc'
// objectToString({ b: 1, o: 2, t: 1 }) // => 'boot'

/**************************************************************************/

//shortestWord(sentence) returns the shortest word of a sentence string
//Expected: O(n) time complexity, O(n) space complexity? (depends on size of word)
function shortestWord(sentence){
    let wordArray = sentence.split(" ");
    let shortest = wordArray[0];

    for(let i = 1; i < wordArray.length; i++){
        if(wordArray[i].length < shortest.length){
            shortest = wordArray[i];
        }
    }
    //console.log(shortest);
    return shortest;
}
// shortestWord('app academy is cool') // => 'is'
// shortestWord('programming bootcamp') // => 'bootcamp'

/**************************************************************************/

//greatestCommonFactor(num1, num2) returns the largest number that divides both num1 and num2
//Expected: O(n) time complexity, O(1) space complexity
function greatestCommonFactor(num1, num2){
    let gcf = num1 < num2 ? num1 : num2;    //gcf is smaller num

    for(let i = gcf; i > 0; i--){
        if(num1 % i === 0 && num2 % i === 0){
            gcf = i;
            break;
        }
    }
    //console.log(gcf);
    return gcf;
}
// greatestCommonFactor(15, 25) // => 5
// greatestCommonFactor(16, 24) // => 8
// greatestCommonFactor(7, 11) // => 1

/**************************************************************************/

//isPassing(assessments) takes in an array of assessment objects. Returns true if the
    //avg assessment score is at least 70. False if otherwise
//Expected: O(n) time complexity, O(1) space complexity
function isPassing(assessments){
    let total = 0;
    let div = 0;

    for(score in assessments){
        total+= assessments[score];
        div++;
    }

    //console.log(total / div);
    return (total / div) >= 70;
}

// let assessment1 = { A: 70,
//                     B: 55,
//                     C: 90,
//                     D: 80};

// isPassing(assessment1);
/**************************************************************************/

//valueConcat(array, obj) returns a new array where each element is concatenated with
    //its coresponding value from the object (see test examples below)
//Expected: O(n) time complexity, O(n) space complexity
function valueConcat(array, obj){
    let newArray = [];

    for(let i = 0; i < array.length; i++){
        let key = array[i];
        if(key in obj){
            newArray.push(key + obj[key]);
        }
        else{
            newArray.push(key);
        }
    }
    //console.log(newArray);
    return newArray;
}
// const arr = ['alex', 'maruice', 'meagan', 'ali'];
// const obj = {alex: 'bronca', ali: 'harris'};
// valueConcat(arr, obj);  //=> ['alexbronca', 'maurice', 'meagan', 'aliharris']

// valueConcat(['a', 'b', 'c'], {b: 2, c: 3}); // => ['a', 'b2', 'c3']

/**************************************************************************/

//threeInARow(arr) returns true if the input array contains 3 of the same number consecutively
    //returns false if otherwise
//Expected: O(n) time complexity, O(1) space complexity
function threeInARow(array){
    for(let i = 1; i < array.length - 1; i++){
        if(array[i] === array[i - 1] && array[i] === array[i + 1]){
            return true;
        }
    }
    return false;
}
// console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));   //true
// console.log(threeInARow([10, 9, 20, 33, 3, 3]));    //false

/**************************************************************************/

//variableNameify(words) takes in an array of words and returns a string representing
    //the mixCased variable name combinging all words: Ex: ["is", "prime"] => "isPrime"
//Expected: O(n) time complexity, O(n) space complexity
function variableNameify(words){
    let string = words[0].toLowerCase();

    for(let i = 1; i < words.length; i++){
        let firstLetter = words[i][0].toUpperCase();
        let restOfWord = words[i].substring(1).toLowerCase();
        string += firstLetter + restOfWord;
    }
    //console.log(string);
    return string;
}

// variableNameify(['is', 'prime']);
// variableNameify(['remove', 'last', 'vowel']);
// variableNameify(['MaX', "VALUE"]);
/**************************************************************************/
