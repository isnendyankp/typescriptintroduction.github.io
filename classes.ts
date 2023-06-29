// Parent class
class Vehicle {
  // shorthand code constructor wih public property
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color)

// Car = childclass
class Car extends Vehicle {
  // cr8 constructor on child class
  // wheels = property/first argumen, number = type
  // Constructors for derived classes must contain a 'super' call.
  constructor(public wheels: number) {
    super('red');
  }
  // override method drive with results on terminal vromm, beep
  // private method can only be called by other method in this class
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    // can call drive because on same class(Car)
    this.drive();
    // call honk from protected methods on different class(Vehicle)
    this.honk();
  }
}

// create new keyword car with class Car
const car = new Car('red');
// access/call method
// access/call method can display with ts-node classes.ts/  namefile.ts
// can call startDrivingProcess because property not private
car.startDrivingProcess();
car.honk();