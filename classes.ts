// Parent class
class Vehicle {
  // method
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

// cr8 second class as a Childclass
// cr8 inheritance on typscirpt
// car = Childclass, Vehidcle Parentclass
class Car extends Vehicle {}

// create new keyword car with class Car
const car = new Car();
// access/call method
// access/call method can display with ts-node classes.ts/  namefile.ts
car.drive();
car.honk();