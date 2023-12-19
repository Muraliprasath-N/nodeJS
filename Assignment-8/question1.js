// 1. Write a program that takes a date and prints the day on which the date falls on.
const Day = new Date().toLocaleString( 'en-us', { weekday: 'long' } )
console.log(Day);