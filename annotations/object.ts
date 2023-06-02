// section 4-31: annotaions around objects
// example a function being defined inside of an object with the function annotation on it
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// Destructuring age
const { age }: { age: number } = profile;