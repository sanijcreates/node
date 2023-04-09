//prints the process
console.log(process);
//prints the name of your local computer
console.log(process.env.COMPUTERNAME);
//print your current directory
console.log(__dirname);
//prints your filename
// eg format: C:\node\globals.js
console.log(__filename);
//prints teh info about current module(file)
console.log(module)
//function to use modules(commonjs)
console.log(require);

// setInterval(() => {
//     console.log("hello")
// },1000)