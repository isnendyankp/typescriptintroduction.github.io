const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Why Types Arrays?
// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
);

// Flexible types /multiple types in arrays

// Everything inside this array cab be treated as a string or date object
// const mainDates: [new Date(), '2031-11-12'];

// This array can con  only contain dates
// const mainDates: [new Date()];

// add manual annotations , this array contain can contain either type of value
const importantDates: (Date | string) [] = [new Date()];
// push with Type value as a string
importantDates.push('2030-10-10');
// push with Type value as a Date
importantDates.push(new Date());



