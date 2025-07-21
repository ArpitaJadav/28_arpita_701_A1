

const readline = require('readline');
const { getResponse } = require('./bot.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(" Welcome to Travel planning bot! Type 'bye' to exit.\n");

function ask() {
    rl.question("You: ", (input) => {
        const response = getResponse(input);
        console.log("Bot:", response);

        if (input.toLowerCase().includes("bye")) {
            rl.close();
        } else {
            ask();
        }
    });
}

ask();
