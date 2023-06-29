// Parent class
class Vehicle {
  // method
  // color = name property, string = type annotation, red = value 
  // if run console.log display will be red, vroom, beep
  color: string = 'red';
  // protected can be called by other method in this class, or by other methods in child classes
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
console.log(vehicle.color)

class Car extends Vehicle {
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
const car = new Car();
// access/call method
// access/call method can display with ts-node classes.ts/  namefile.ts
// can call startDrivingProcess because property not private
car.startDrivingProcess();
// car.honk();