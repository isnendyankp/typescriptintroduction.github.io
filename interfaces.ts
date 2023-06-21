
// s7-43:still work after pull put name,year & broken
interface Reportable {
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

// s7- 44 setup another object
const drink = {

};

// S7-41 Fixing Long Annotations with interfaces
const printSummary = (item: Reportable): void => {
  // s7-42: pull out all properties with summary function
  console.log(item.summary());
};

// printSummary and pass in oldCivic
printSummary(oldCivic);
