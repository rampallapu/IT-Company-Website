


// Chatbot Script
const chatbotBody = document.getElementById('chatbot-body');
const chatMessages = document.getElementById('chatbot-messages');
const chatInput = document.getElementById('chat-input');

// Function to Toggle Chatbot Visibility
function toggleChatbot() {
    if (chatbotBody.style.display === 'none' || chatbotBody.style.display === '') {
        chatbotBody.style.display = 'flex';
    } else {
        chatbotBody.style.display = 'none';
    }
}

// Function to Add Messages
function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === "You" ? "user-message" : "bot-message");
    messageElement.innerText = `${sender}: ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;  // Auto-scroll to latest message
}

// Function to Handle User Input
function handleKeyPress(event) {
    if (event.key === "Enter") {
        const userMessage = chatInput.value.trim();
        if (userMessage !== "") {
            addMessage(userMessage, "You");
            chatInput.value = "";
            botResponse(userMessage);
        }
    }
}

// Function to Generate Chatbot Response
function botResponse(userMessage) {
    setTimeout(() => {
        let botMessage = "I'm here to help!";
        const lowerCaseMessage = userMessage.toLowerCase();

        if (lowerCaseMessage.includes("hello")) {
            botMessage = "Hello! How can I assist you today?";
        } else if (lowerCaseMessage.includes("services")) {
            botMessage = "We offer Web Development, Cloud Computing, AI & Machine Learning, Cybersecurity, and IT Consulting.";
        } else if (lowerCaseMessage.includes("contact")) {
            botMessage = "You can contact us at info@enifratech.com or call us at +91 98765 43210.";
        } else if (lowerCaseMessage.includes("about")) {
            botMessage = "Enifratech Systems India is a professional IT company specializing in software development, cloud computing, and cybersecurity.";
        }

        addMessage(botMessage, "Bot");
    }, 500); // Delay for a natural response effect
}

// Event Listener for Input
chatInput.addEventListener("keypress", handleKeyPress);

 
