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
const mainDates: [new Date(), '2031-11-12'];


