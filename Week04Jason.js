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

2. //Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
   //Use a loop to iterate through the array and calculate the average number of letters per name.
   //Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
   
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var totalLetters = 0;
for (var i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}

var averageLetters = totalLetters / names.length;
console.log("Average number of letters per name", averageLetters);

var concatenatedNames = ' ';
for (var i = 0; i < names.length; i++) {
    concatenatedNames += names[i];
    if (i !== names.length -1) {
        concatenatedNames += ' ';
    }
}

console.log("Concatenated Names", concatenatedNames);

3. //How do you access the last element of any array?
    //var lastElement = array[array.length - 1];
    //console.log(array(lastElement));
4. //How do you access the first element of any array?
    //var firstElement = array[0];
    //console.log(array(firstElement));
5. //Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
   //For example:

   //let names = ["Kelly", "Sam", "Kate"];    // starting with this array
   //let nameLengths = [5, 3, 4];             // create a new array
   
   var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
   var nameLengths = [];

   for (var i = 0; i < names.length; i++) {
    var length = names[i].length;
    nameLengths.push(length);
   }
   console.log(nameLengths);

6. //Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
   
   var nameLengths = [3, 5, 3, 5, 4, 3];
   var sum = 0;

   for (var i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
   }
   console.log("Sum:", sum);
   
7. //Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
   
   function concatenateWord(word, n) {
   var concatenated = '';

   for (i = 0; i < n; i++) {
    concatenated += word;
   }

   return concatenated;
   }

   var result = concatenateWord("Hello", 3);
   console.log(result);

8. //Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
   
    function getFullName(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    return fullName;
   }

   var result = getFullName("Jason", "Naggles");
   console.log(result);

9. //Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
   
    function isSumGreaterThan100(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
   }

   var numbers1 = [60, 30, 10, 50];
   var result1 = isSumGreaterThan100(numbers1);
   console.log(result1);

   var numbers2 = [10, 20, 30, 40];
   var result2 = isSumGreaterThan100(numbers2);
   console.log(result2);

   10. //Write a function that takes an array of numbers and returns the average of all the elements in the array.
   
    function getAverageOfNumbers(numbers) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
   
    var average = sum / numbers.length;
    return average;
}
    var numbers = [10, 20, 30, 40, 50];
    var result = getAverageOfNumbers(numbers);
    console.log(result);

11. //Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
    
    function isFirstArrayAverageGreater(array1, array2) {
        var sum1 = 0;
        var sum2 = 0;
    for (var i = 0; i < array1.length; i++) {
        sum1 += array1[i];
    }

    for (var k = 0; k < array2.length; k++) {
        sum2 += array2[k];
    }

        var average1 = sum1 / array1.length;
        var average2 = sum2 / array2.length;
    
        return average1 > average2;
    }

        var array1 = [10, 20, 30, 40, 50];
        var array2 = [5, 15, 25, 35, 45];
        var result = isFirstArrayAverageGreater(array1, array2);
        console.log(result);

12. //Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

    function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
  }

    var result1 = willBuyDrink(true, 15.75);
    console.log(result1);
    var result2 = willBuyDrink(false, 8.50);
    console.log(result2);
    
13. //Create a function of your own that solves a problem. In comments, write what the function does and why you created it.