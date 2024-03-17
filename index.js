// Define a helper function to greet a user
function greetUser(name) {
    return "Hello, " + name + "! Welcome!";
}

// Main function to demonstrate the usage of the helper function
function main() {
    // Prompt the user to enter their name
    let userName = prompt("Enter your name:");

    // Check if the user entered a name
    if (userName) {
        // Call the helper function to greet the user
        let greeting = greetUser(userName);

        // Display the greeting
        console.log(greeting);
    } else {
        // If the user did not enter a name, display a default greeting
        console.log("Hello there! Welcome!");
    }
}

// Call the main function to start the program
main();