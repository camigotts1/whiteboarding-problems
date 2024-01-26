//Whiteboarding Problems AA Practice Part 1 (#1 - 20)


//logBetween(lowNum, highNum) returns an array from lowNum to highNum, inclusive
//Expected: O(n) time complexity, O(n) space complexity
function logBetween(lowNum, highNum){
    let array = [];

    for(let i = lowNum; i <= highNum; i++){
        array.push(i);
    }

    return array;
}
// console.log(logBetween(-10, 5));
// console.log(logBetween(3, 9));
/**************************************************************************/

//logBetweenStepper(min, max, step) returns an array from min to max by given step
//Expected: O(n) time complexity, O(n) space complexity
function logBetweenStepper(min, max, step){
    let array = [];

    for(let i = min; i <= max; i+=step){
        array.push(i);
    }

    return array;
}
// console.log(logBetweenStepper(-10, 5, 2));
// console.log(logBetweenStepper(3, 9, 2));
/**************************************************************************/

//printReverse(min, max) returns an array of all numbers from min to max (exclusive)
    //in reverse order
//Expected: O(n) time complexity, O(n) space complexity
function printReverse(min, max){
    let array = [];

    for(let i = max - 1; i > min; i--){
        array.push(i);
    }

    return array;
}
// console.log(printReverse(54, 71));
// console.log(printReverse(40, 1));   //empty
/**************************************************************************/

//fizzBuzz(max) returns an array of every number from 0 to max
    //that is divisibly by either 3 or 5, but not both
//Expected: O(n) time complexity, O(n) space complexity
function fizzBuzz(max){
    let array = [];

    for(let i = 0; i <= max; i ++){
        if(i % 3 === 0 && i % 5 !== 0){
            array.push(i);
        }
        else if(i % 5 === 0 && i % 3 !== 0){
            array.push(i);
        }
    }

    return array;
}
//could reduce code length by combining if and else if statements, but
//code is more readable separated
//console.log(fizzBuzz(20));
/**************************************************************************/

//isPrime(number) returns true if the number is prime, false if otherwise
//assume number is a positive integer
//Expected: O(n) time complexity, where n is number, O(1) space complexity
function isPrime(number){
    if(number === 1){
        return false;
    }
    if(number === 2){
        return true;
    }

    for(let i = 2; i <= number / 2; i++){    //don't need to mod past 1/2 of number
        if(number % i === 0) return false;
    }

    return true;   //if number was not divisible by any num leading up, then it's prime
}
// console.log(isPrime(9));
// console.log(isPrime(2017));
// console.log(isPrime(13457));
/**************************************************************************/

//maxValue(array) returns largest value in array (assume array only contains numbers)
//Expected: O(n) time complexity, O(1) space complexity

function maxValue(array){
    if(array.length === 0) return null;
    let max = array[0];

    for(let i = 1; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }

    return max;
}
// console.log(maxValue([12, 6, 43, 2]));   //43
//console.log(maxValue([-1, -10, -0.43]));  //-0.43
//console.log(maxValue([]));   //null
/**************************************************************************/

//myIndexOf(array, target) returns the index of target if it exists in array, or -1 if not present
//Expected O(n) time complexity, O(1) space complexity
function myIndexOf(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}
// console.log(myIndexOf([1, 2, 3, 4, 5], 4)); //3
// console.log(myIndexOf([1, 2, 3, 4, 5], 7)); //-1 (not found)
/**************************************************************************/

//factorArray(array, number) takes an array of numbers, a number, and returns an array of all factors
    //of that number that are in array
//Expected: O(n) time complexity, O(n) space complexity (where n is length of array)
function factorArray(array, number){
    let factors = [];
    for(let i = 0; i < array.length; i++){
        if(number % array[i] === 0){
            factors.push(array[i]);
        }
    }
    return factors;
}
// console.log(factorArray([2,3,4,5,6],35)); // => [5]
// console.log(factorArray([2,3,4,5,6],20)); // => [2,4,5]
// console.log(factorArray([10,15,20,25],5) ); //[]
/**************************************************************************/

//oddRange(end) returns an array containing all odd numbers up to "end"
//Expected: O(n) time complexity, O(n) space complexity
function oddRange(end){
    let array = [];
    for(let i = 1; i <= end; i+=2){
        array.push(i);
    }

    return array;
}
// console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
// console.log(oddRange(6) );  // => [ 1, 3, 5 ]
/**************************************************************************/

//reverseHyphenString(string) takes in a hyphenated string and returns it reversed
//Expected: O(n) time complexity (where n is the number of words between hyphens)
    //O(n) space complexity (allocating new array to help with reversal)
function reverseHyphenString(string){
    let array = string.split("-");
    array.reverse();    //O(n) time
    return array.join("-");
}
// console.log(reverseHyphenString("Go-to-the-store") );// => "store-the-to-Go"
// console.log(reverseHyphenString("Jump,-jump-for-joy")); // => "joy-for-jump-Jump,"
/**************************************************************************/

//intersect(arr1, arr2) returns a new array containing elements common to both arr1 and arr2
//Expected: O(n^2) time complexity, O(n) space complexity
function intersect(arr1, arr2){
    let intersected = [];

    for(let i = 0; i < arr1.length; i++){   //O(n)
        if(arr2.includes(arr1[i])){         //O(n) => O(n^2)
            intersected.push(arr1[i]);
        }
    }
    return intersected;
}
// console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])); // => [ 'b', 'd' ]
// console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])); // => []
/**************************************************************************/

//mirrorArray(array) returns a new array "mirrored"
//Ex: [1, 2, 3] => [1, 2, 3, 3, 2, 1]
//Expected: O(n) time complexity, O(n) space complexity
function mirrorArray(array){
    let myArray = [...array];

    for(let i = array.length - 1; i >= 0; i--){
        myArray.push(array[i]);
    }

    return myArray;
}
// console.log(mirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
// console.log(mirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
/**************************************************************************/

//abbreviate(sentence) returns a new sentence where words longer than 4 characters (5 or more)
    //have their vowels removed (can assume sentence is all lowercase characters)
//Expected: O(n^2) time complexity (filter inside for loop), O(n) space complexity
function abbreviate(sentence){
    let words = sentence.split(" ");

    for(let i = 0; i < words.length; i++){
        if(words[i].length > 4){
            words[i] = removeVowels(words[i]);
        }
    }
    return words.join(" ");
}

function removeVowels(word){
    const vowels = ["a", "e", "i", "o", "u"];
    let letters = word.split("");

    const result = letters.filter( (letter) => !vowels.includes(letter));

    return result.join("");
}

//can put filter inside abbreviate method, but helper function makes it more clear/easier to read

// console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
// console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
// console.log(abbreviate('hello world')); // => 'hll wrld'
// console.log(abbreviate('how are you')); // => 'how are you'
/**************************************************************************/

//adults(people) returns an array containing the names of people with age 18+
//Expected: O(n) time complexity, O(n) space complexity
function adults(people){
    let adultArray = [];

    for(let i = 0; i < people.length; i++){
        if(people[i].age >= 18){
            adultArray.push(people[i].name);
        }
    }

    return adultArray;
}
// const ppl = [
//     {name: 'John', age: 20},
//     {name: 'Jim', age: 13},
//     {name: 'Jane', age: 18},
//     {name: 'Bob', age: 7}
//   ];

//   console.log(adults(ppl)); // => [ 'John', 'Jane' ]
/**************************************************************************/

//countScores(people) returns an object that has key-value pairs (key: name, value: total score)
    //"people" is an array of score objects with two key-value pairs (name and score)
//Expected: O(n) time complexity (n is number of entries), O(n) space complexity (n is number of names)
function countScores(people){
    let scoreObj = {};
    for(let i = 0; i < people.length; i++){
        let name = people[i].name;
        let score = people[i].score;

        if(name in scoreObj) {
            scoreObj[name] += score;
        }
        else{
            scoreObj[name] = score;
        }
    }
    return scoreObj;
}
// Example 1:
// const ppl = [
//     { name: "Anthony", score: 10 },
//     { name: "Fred", score : 10 },
//     { name: "Anthony", score: -8 },
//     { name: "Winnie", score: 12 }
//   ];
//   console.log(countScores(ppl)); // => { Anthony: 2, Fred: 10, Winnie: 12 }

//   // Example 2
//   const peeps = [
//     { name: "Anthony", score: 2 },
//     { name: "Winnie", score: 2 },
//     { name: "Fred", score: 2 },
//     { name: "Winnie", score: 2 },
//     { name: "Fred", score: 2 },
//     { name: "Anthony", score: 2 },
//     { name: "Winnie", score: 2 }
//   ];

//   console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6 }
/**************************************************************************/

//firstNPrimes(n) returns an array of the first n primes (uses previous isPrime function)
//Expected: O(n) time complexity, O(n) space complexity
function firstNPrimes(n){
    let array = [];
    let i = 2;

    while(array.length < n){
        if(isPrime(i)){
            array.push(i);
        }
        i++;
    }
    return array;
}
// console.log(firstNPrimes(0));  // => []
// console.log(firstNPrimes(1));  // => [2]
// console.log(firstNPrimes(4));  // => [2, 3, 5, 7]
/**************************************************************************/

//peakFinder(array) takes in an array of numbers, returns an array containing the indices of all peaks
    //a peak is an element greater than both of its neighbors
    //first and last elements are peaks if greater than its 1 neighbor
//Expected: O(n) time complexity, O(n) space complexity
function peakFinder(array){
    let peakIndex = [];

    if(array[0] > array[1]){    //first element
        peakIndex.push(0);
    }

    for(let i = 1; i < array.length - 1; i++){
        if(array[i] > array[i - 1] && array[i] > array[i + 1]){
            peakIndex.push(i);
        }
    }

    if(array[array.length - 1] > array[array.length - 2]){  //last element
        peakIndex.push(array.length - 1);
    }

    return peakIndex;
}
// console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
// console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
// console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]
/**************************************************************************/

//divisibleByThreePairSum(array) returns an array of arrays, where each
    //sub-array are all the pairs of indicies where the elements sum to a multiple of 3
//Expected: O(n^2) time complexity, O(n)? Space complexity
function divisibleByThreePairSum(array){
    let threePairs = [];

    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if((array[i] + array[j]) % 3 === 0){
                threePairs.push([i, j]);
            }
        }
    }
    return threePairs;
}
// const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
// console.log(arr1); // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

// const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
// console.log(arr2) // => [[1, 3]]
/**************************************************************************/

//zipArray(arr1, arr2) "zips" two arrays together and returns a 2D-array (assume arrays have same length)
//Expected: O(n) time complexity, O(n) space complexity
function zipArray(arr1, arr2){
    let zippedArray = [];
    for(let i = 0; i < arr1.length; i++){
        zippedArray.push([arr1[i], arr2[i]]);
    }

    return zippedArray;
}
// const a1 = ['a', 'b', 'c', 'd'];
// const a2 = [10, 20, 30, 40];

// const result = zipArray(a1, a2);
// console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
/**************************************************************************/

//twoDimensionalTotal(array) takes in a 2D-array and returns the total sum of all elements
//Expected: O(n^2)? time complexity, O(1) space complexity
function twoDimensionalTotal(array){
    let sum = 0;
    array.forEach( (subArray) => {
        for(let i = 0; i < subArray.length; i++){
            sum+= subArray[i];
        }
    });
    return sum;
}

// const arr1 = [
//     [5, 2, 5, 3],
//     [12, 13],
//   ];

//   twoDimensionalTotal(arr1);  // => 40

//   const arr2 = [
//     [2],
//     [1, 9],
//     [1, 1, 1]
//   ]

//   twoDimensionalTotal(arr2);  // => 15

module.exports = { isPrime }
