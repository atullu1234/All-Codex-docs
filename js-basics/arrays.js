// Creating
let volkswagen;
volkswagen = ["Audi", "Bentley"];
console.log(volkswagen);

let zeroOne;
zeroOne = [0, 1];
console.log(zeroOne);

// or can be typed like below
let states = ["Florida", "Texas", "Georgia"];
console.log(states);

let positiveNumbers = [1, 2, 3, 4];
console.log(positiveNumbers);

// Adding
// Array.splice()
let vegetables = ["carrot", "broccoli", "corn", "cucumber"];
vegetables.splice(1, 0, "asparagus");
console.log(vegetables); // the splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); // push method adds elements to the end of the array
console.log(fruits);

let numbers = [2, 3];
numbers.unshift(0, 1); // unshift method adds elements to the beginning of the array
console.log(numbers);

// Removing
// Array.splice()
let people = ["John", "Adam", "Mary", "Abbu"];
console.log(people.splice(0, 3)); // the slice method returns the selected elements in an array, excluding the last index

let vehicles = ["cars", "motorcycles", "buses", "bikes"];
vehicles.pop(); // This removes the last element of the array
console.log(vehicles);

let stores = ["WalMart", "SamsClub", "Costco", "Publix"];
stores.shift(); // This removes the first element of the array
console.log(stores);

// Indexes
let carsThree = ["Audi", "Bentley", "Porsche", "Volkswagen"];
console.log(carsThree.indexOf("Bentley")); // This will give me 1 in the console

let carsFour = ["Buick", "Cadillac", "Chevrolet", "GMC"];
console.log(carsFour.indexOf("Buick")); // This will give me 0 in the console

console.log(carsThree[1]);
