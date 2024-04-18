//DAY 47
//TASK 1 (List three reserved words in JS and create a valid use case for each)
let count = 10;
//Reserved word: of - used to execute a block of code if a specified condition is true
if (count > 0){
    console.log("Count is greater than 0.");
}
//Reserved word: return-used to exit a function and return a value from that function
function add(a:number, b:number){
    return a + b
}
//demonstrate valid use cases for the reserved words "let","if" and "return"

//TASK 2 (Explain the error that occurs when trying to use reserved word as a variable name)
let if = 5; //this line is showing syntax error
console.log(
    "Using a reserved word as a variable name causes a syntax error in JS"
);
//it's essentail to avoid using reserved words as identifiers to prevent these errors

//TASK 3 (Discuss the significance of the await reserved word in asynchronous JS)
// Define fetchSomething function
async function fetchSomething() {
    // Simulate an asynchronous operation
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched!"); // Resolve with a sample data
        }, 1000); // Simulating asynchronous delay
    });
}

// Define fetchData function
async function fetchData(){
    try {
        // Use the await keyword to pause execution until the promise settles
        let data = await fetchSomething();
        console.log(data);
    } catch (error) {
        // Handle any errors that occur during the asynchronous operation
        console.error('Error fetching data:', error);
    }
}

// Call fetchData function
fetchData();

// Output a message explaining the significance of the await keyword
console.log(
    "The `await` keyword pauses the execution until the promise settles, and then resumes with the resolved value."
);
