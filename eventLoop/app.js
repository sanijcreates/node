// event loop offloads the time consuming operations and moves on with the rest of the code. 
// JS originally is synchronous and single-threaded, which means it runs line by line and will not execute the other line 
// until and unless it run the line. 

console.log('first')

setTimeout(() => {
    console.log("CB");
}, 0)

setTimeout(() => {
    console.log(("CB2"));
}, 1000)

setTimeout(() => {
    console.log(("C3"));
}, 0)
console.log('SECOND');
console.log('third');

//will print
// first
// SECOND
// third
// CB
// C3
// CB2
