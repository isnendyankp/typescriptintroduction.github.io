// S7-41 Fixing Long Annotations with interfaces
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  // s7-42: add new property
  summary(): string;
}

// 40. Long Type Annotations
// create variable with 3 type string , number, boolean
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  // s7-42: add summary function
  summary(): string {
    // s7-42: a function whose declared type must return a value
    return `Name: ${this.name}`;
  },
};

// create function with 1 argument is vehicle
// Add type annotation (vehicle: {name: string; year: number; broken: boolean }):
// add void for return
// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {

// S7-41 Fixing Long Annotations with interfaces
const printVehicle = (vehicle: Vehicle): void => {
  // s7-42: pull out all properties with summary function
  console.log(vehicle.summary());
};

// print vehicle and pass in oldCivic
printVehicle(oldCivic);
