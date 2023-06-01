// create two arguments with type value number
// const add = (a: number, b: number): number => {
//     return a + b;
// };

// const subtract = (a: number, b: number): number => {
//   return a - b;
// };


// shorthand syntax
const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  return a - b;
};


function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// no Return value for this function(void)
const logger = (message: string): void => {
  console.log(message);
};

// never going to execute the function completely
const throwError = (message: string): never => {
    throw new Error(message);
};

// still do fallback to void becouse we are technically not returning anything and there's just a chance of us never reaching the end of the function
const throwFalse = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// Undestructuring with Annotations
const logWeather = (todaysWeather : { date: Date, weather: string }): void => {
  console.log(todaysWeather.date);
  console.log(todaysWeather.weather);
};


logWeather(todaysWeather);