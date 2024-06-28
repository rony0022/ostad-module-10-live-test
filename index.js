//1) Create a function that takes voltage and current and returns the calculated power.  Ex- circuitPower(110, 3) ➞ 330

function circuitPower(voltage, current) {
    return voltage * current;
}
console.log(circuitPower(110, 3));

//2) Write a JavaScript function named ‘findMaxNumber’ that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.

function findMaxNumber(numbers) {
    if (numbers.length === 0) return null;
    return Math.max(...numbers);
}
console.log(findMaxNumber([1, 2, 3, 4, 5]));
console.log(findMaxNumber([]));

//3) Write a JavaScript function named ‘mergeArrays’ that takes two arrays as arguments and returns a new array.

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));


//4) Create a function ‘arrayValuesTypes’ that takes an array and returns the types of values (data types) in a new array. Ex- arrayValuesTypes([1, 2, "null", []]) ➞ ["number", "number", "string", "object"]

function arrayValuesTypes(arr) {
    return arr.map(value => typeof value);
}
console.log(arrayValuesTypes([1, 2, "null", []]));
