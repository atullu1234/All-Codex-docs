// Primitives (stored on the stack)
let name = "Abbu"; //String literal
console.log(name);
let age = 20; //Number literal
console.log(age);
let isApproved = true; //Boolean Literal (can only be true/false)
console.log(isApproved);
let firstName = undefined; //an undefined variable has been declared but not defined yet. undefined is a type and a value
console.log(firstName);
let lastName = null; //a null variable has a defined value of nothing. A null is an object type.
console.log(lastName);

// Reference Types (stored on the Heap)
// Objects
let car = {
  brand: "lamborghini",
  model: "aventador",
  year: 2021,
};
console.log(car);
let location = {
  city: "Miami",
  state: "Florida",
  country: "United States",
};
console.log(location);
console.log(location.city);

// Arrays
let furniture = ["Sofa", "Table", "Cabinet", "Bed"];
console.log(furniture);
let countries = ["United States", "Brazil", "UK", "Ethiopia"];
console.log(countries);

// Functions
function addingTwo(x) {
  return x + 2;
}
console.log(addingTwo(4));

function subtractingTwo(x) {
  return x - 2;
}
console.log(subtractingTwo(4));
