1. //Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] - ages[0] is not allowed!
//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//Use a loop to iterate through the array and calculate the average age.

var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var lastIndex = ages.length - 1;
var firstElement = ages[0];
var lastElement = ages[lastIndex];
var newAge = 90;

var subtractResult = lastElement - firstElement;
console.log("Subtract Result", subtractResult);

ages.push(newAge);

var sum = 0;
for (i = 0; i < ages.length; i++) {
    sum += ages[i];

}

var average = sum / ages.length;
console.log("Average age", average);

