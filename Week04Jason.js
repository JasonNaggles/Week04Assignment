1. 
//1a.  Created a total of 8 variables.  They are ages, lastIndex, firstElement, lastElement, newAge, subtractResult, sum, and average.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var lastIndex = ages.length - 1;
var firstElement = ages[0];
var lastElement = ages[lastIndex];
var newAge = 90;
//1b. Named a variable called subtractResult to subtract the first element called firstElement from the last element called lastElement.
var subtractResult = lastElement - firstElement;
console.log("Subtract Result", subtractResult);
//1c.  Pushed a new age called newAge.
ages.push(newAge);
//1d.  Looped thru the array called ages & calculated the average age. 
var sum = 0;
for (i = 0; i < ages.length; i++) {
    sum += ages[i];

}

var average = sum / ages.length;
console.log("Average age", average);

2. 
   
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var totalLetters = 0;
//2a. Looped thru the array called names & calculated the average number of letters in each name. 
for (var i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}

var averageLetters = totalLetters / names.length;
console.log("Average number of letters per name", averageLetters);

var concatenatedNames = ' ';
//2b. Looped thru the array in order to concatenate all names with spaces.
for (var i = 0; i < names.length; i++) {
    concatenatedNames += names[i];
    if (i !== names.length -1) {
        concatenatedNames += ' ';
    }
}

console.log("Concatenated Names", concatenatedNames);

3. //How do you access the last element of any array?

    //var lastElement = array[array.length - 1];
    

4. //How do you access the first element of any array?
    //var firstElement = array[0];
    

5. //Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
   //For example:

   //let names = ["Kelly", "Sam", "Kate"];    // starting with this array
   //let nameLengths = [5, 3, 4];             // create a new array
   
   var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
   var nameLengths = [];
   //5a. Looped thru the names array & pushed the new array called nameLengths.
   for (var i = 0; i < names.length; i++) {
    var length = names[i].length;
    nameLengths.push(length);
   }
   console.log(nameLengths);

6. 
   
   var nameLengths = [3, 5, 3, 5, 4, 3];
   var sum = 0;
   //6a.  Looped thru the nameLengths array & calculated sum
   for (var i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
   }
   console.log("Sum:", sum);

7. //Wrote a function called concatenatedWord to concatenate a word n times.
   function concatenateWord(word, n) {
   var concatenated = '';

   for (i = 0; i < n; i++) {
    concatenated += word;
   }

   return concatenated;
   }

   var result = concatenateWord("Hello", 3);
   console.log(result);

8. //Wrote a function to put together a full name.
   
    function getFullName(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    return fullName;
   }

   var result = getFullName("Jason", "Naggles");
   console.log(result);

9. //Wrote a function to determine if sum of array > 100
   
    function isSumGreaterThan100(numbers) {
        sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    if (sum > 100) {
        return true;
    } else {
        return false;
    }
   }
   console.log(isSumGreaterThan100(ages));

   10. //Wrote a function to average an array of numbers.
   
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

11. //Wrote a function compare two averages of 2 arrays of numbers.
    
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

12. //Wrote a function of a boolean and a conditional.

    function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
  }

    var result1 = willBuyDrink(true, 15.75);
    console.log(result1);
    var result2 = willBuyDrink(false, 8.50);
    console.log(result2);
    
13. //Create a function of your own that solves a problem. In comments, write what the function does and why you created it.