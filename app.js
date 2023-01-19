function filterFalsy(a, b) {
    return !a ? a : b
};

console.log(filterFalsy(100, "dog"));

const arrLength = (arr) => {
    return arr.length
};

console.log(arrLength([]));

function letElem(arr) {
    return arr[arr.length - 1]
};

console.log(letElem(["dog", "cat", "ball"]))

const sumArr = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i]
    }  
    return sum
};

console.log(sumArr([2, 2, 10, 20]));

function sumOfNum(num) {
    let sum = 0
    for (let i = 1; i <= num; ++i) {
        sum = sum + i
    }
    return sum
};

console.log(sumOfNum(4));

const calcTime = (timeInSec) => {
    let sec = timeInSec % 60
    let min = Math.floor(timeInSec / 60)

    if (min.toString().length === 1) {
        min = "0" + min
    }

    if (sec.toString().length === 1) {
        sec = "0" + sec
    }

    console.log(`${min}:${sec}`)
};

calcTime(305);

function getMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; ++i) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
};

console.log(getMax([10, 3, 5]));

function reverseString(str) {
    let reverse = ""
    for (let i = 0; i < str.length; ++i) {
        reverse = str[i] + reverse
    }
    return reverse
};

console.log(reverseString("abc"));


const decrementingForLoop = (str) => {
    let decrement = ""
    for (let i = str.length - 1; i >= 0; --i) {
        decrement += str[i]
    }
    return decrement
};

console.log(decrementingForLoop("abc"));

console.log('123'.split('').reverse().join(''));

console.log([1, 2, 3].join(''));

function splitReverseJoin(a) {
    return a.split('').reverse().join('')
};

console.log(splitReverseJoin('abcdefg'));

const convertToZeros = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; ++i) {
        newArr[i] = 0
    }
    return newArr
};

console.log(convertToZeros([1, 5, 7, 9]));

function convertToZerosMap(arr) {
    let newArr = arr.map(i => 0)
    return newArr
};

console.log(convertToZerosMap([4, 8, 9, 16, 1, 2]));

const convertToZerosFill = (arr) => {
    return new Array(arr.length).fill(0)
};

console.log(convertToZerosFill([1, 2, 3]))

function removeApplesForLoop(arr) {
    let noApples = []
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 'Apple') {
            noApples.push(arr[i])
        }
    }
    return noApples
};

console.log(removeApplesForLoop(['Banana', 'Apple', 'Orange', 'Apple']));

function removeApplesFilter(arr) {
    let noApples = arr.filter(arr => arr !== "Apple")
    return noApples
};

console.log(removeApplesFilter(['Banana', 'Apple', 'Orange', 'Apple'])); 

const filterFalsyForLoop = (arr) => {
    let truthyValues = []
    for (let i = 0; i < arr.length; ++i) {
        if (!!arr[i] === true) {
            truthyValues.push(arr[i])
        }
    }
    return truthyValues
};

console.log(filterFalsyForLoop(["", 0, null, undefined, 10, 'hello']));

function filterFalsyFilterMethod(arr) {
    let truthyValues = arr.filter(value => !!value === true)
    return truthyValues
};

console.log(filterFalsyFilterMethod(["", 0, null, undefined, 10, 'hello']));

const convertToBoolean = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; ++i) {
        if (!!arr[i] === true) {
            newArr.push(arr[i] = true)
        }
        else {
            newArr.push(arr[i] = false)
        }
    }
    return newArr
};

console.log(convertToBoolean([500, 0, 'David', "", []]));

function convertToBooleanMapMethod(arr) {
    let newArr = arr.map(elem => !!elem)
    return newArr
};

console.log(convertToBooleanMapMethod([500, 0, 'David', "", []]));
