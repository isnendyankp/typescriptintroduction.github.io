const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// for this case type value string | number | boolean
// const pepsi = ['brown', true, 40];

// Create specific order of types of elements inside of this tuples
// for this case type value string | boolean | number 
// const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];