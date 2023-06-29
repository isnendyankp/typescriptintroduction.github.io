// Parentclass = Vehicle
class Vehicle {
  // shorthand code constructor wih public property
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color)

// childclass = Car with basic inheritance
class Car extends Vehicle {
  // cr8 constructor on child class
  // public property, wheels = first argumen, number = type
  // color = second argumentm string = type & dont need property bcoz this argument belongs to Vehicle
  // Constructors for derived classes must contain a 'super' call.
  constructor(public wheels: number, color: string) {
    super(color);
  }

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

// 4 = first Argument with type number(childclass), 'red' = second argument with type string(parentclass)
const car = new Car(4, 'red');
// access/call method can display with ts-node classes.ts/  namefile.ts
// can call startDrivingProcess because property not private
car.startDrivingProcess();
