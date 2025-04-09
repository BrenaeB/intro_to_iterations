//first demonstration
for (let number = 0; number < 12; number +=2){
    console.log(number);
    console.log("loop running");
}    


//break excercise
for(let cars = 3; cars < 6; cars += 2) {
    if(cars === 8) {
        break;
    }
    console.log(`Cars at intersection:` + cars);
}

//looping triangle exercise
let row = 1; // Start with the first row  
const totalRows = 7; // Total number of rows for the triangle  

while (row <= totalRows) {  
    console.log('#'.repeat(row)); // Print the corresponding number of '#' characters  
    row++; // Move to the next row  
}  

//Doubling numbers untill 100

let number = 5
do {
number *= 2; 
console.log(number);

} while(number < 100);
 console.log(number);