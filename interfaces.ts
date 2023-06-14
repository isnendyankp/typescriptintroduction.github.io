// S7-41 Fixing Long Annotations with interfaces
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

// 40. Long Type Annotations
// create variable with 3 type string , number, boolean
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
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
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

// print vehicle and pass in oldCivic
printVehicle(oldCivic);
