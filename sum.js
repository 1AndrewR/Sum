// add the numbers from our CML, will not take negative numbers

// to read our command line arguments

//console.log(process.argv);

const args = process.argv.slice(2);

if (args.length !== 2) {
    console.log("Usage: node sum.js <num1> <num2>");
} else {
    const num1 = parseFloat(args[0]);
    const num2 = parseFloat(args[1]);
    const sum = num1 + num2;
    console.log(`The sum is: ${sum}`);
}