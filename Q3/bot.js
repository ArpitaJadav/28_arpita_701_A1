function getResponse(userInput) {
    const input = userInput.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! I’m your Travel Assistant. How can I help you?";
    }
    if (input.includes("book flight")) {
        return "Sure! I can help you book a flight. Where would you like to go?";
    }
    if (input.includes("book hotel")) {
        return "Great! What city do you need a hotel in?";
    }
    if (input.includes("recommend places")) {
        return "I recommend visiting Paris, Tokyo, or Bali. Would you like details?";
    }
    if (input.includes("bye")) {
        return "Goodbye! Have a safe trip!";
    }

    return "Sorry, I didn’t understand that. I can help with flights, hotels, and travel recommendations.";
}

module.exports = { getResponse };
