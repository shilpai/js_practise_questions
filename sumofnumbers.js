// problem
/*
Write a js code to get an integer N and print the sum of values from 1 to N.

Input Description:
A single line contains an integer N.
Output Description:
Print the sum of values from 1 to N.
*/

let sum = 0;
let nvalue = parseInt(prompt('Enter the integer')); 
sum = nvalue* (nvalue+1)/2;
console.log('The sum of n number is', sum);