const chatbotWrapper = document.querySelector(".chatbot-wrapper");
const chatbotToggle = document.querySelector(".chatbot-toggle");
const chatbotContainer = document.querySelector(".chatbot-container");
const chatbotMessages = document.querySelector(".chatbot-messages");
const chatbotInput = document.querySelector(".chatbot-input");
const chatbotSubmit = document.querySelector(".chatbot-submit");
const chatbotClose = document.querySelector(".container-closing");

let isOpen = false;

// Toggle chatbot container
function toggleChatbot() {
  if (chatbotContainer.classList.contains("active")) {
    chatbotContainer.classList.remove("active");
  } else {
    chatbotContainer.classList.add("active");
  }
  isOpen = !isOpen;
}

function closeChatbot() {
  chatbotContainer.classList.remove("active");
  isOpen = false;
  console.log("working");
}

// Send user message and receive bot response
function sendMessage() {
  const message = chatbotInput.value;
  if (!message) {
    return;
  }

  const userMessageElement = document.createElement("div");
  userMessageElement.classList.add("message", "user");
  userMessageElement.textContent = message;
  chatbotMessages.appendChild(userMessageElement);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

  chatbotInput.value = "";

  function botMessage(message) {
    const botMessageElement = document.createElement("div");
    botMessageElement.classList.add("message", "chatbot", "status-typing");
    botMessageElement.textContent = "Typing...";
    setTimeout(() => {
      botMessageElement.classList.remove("status-typing");
      botMessageElement.textContent = message;
    }, 1200);
    chatbotMessages.appendChild(botMessageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Simulate bot response after 1 second
  setTimeout(() => {
    let userMsg = message.toLowerCase().split(" ");
    if (userMsg.includes("how" && "you")) {
      botMessage("I am good.. how are you?");
    } else if (userMsg.includes("who" && "you")) {
      botMessage("I am a ChatBot");
    } else if (userMsg.length === 1 && userMsg.includes("hello")) {
      botMessage("Hello");
    } else if (userMsg.includes("courses" || "course")) {
      botMessage("Redirecting to the course page...");
      window.open("https://www.sciastra.com/courses/");
    } else if (userMsg.includes("selection" || "selections")) {
      botMessage("Redirecting to the selections page...");
      window.open("https://www.sciastra.com/selections/");
    } else if (userMsg.includes("blog" || "blogs")) {
      botMessage("Redirecting to the blog page...");
      window.open("https://www.sciastra.com/blog/");
    } else if (userMsg.includes("material" || "materials")) {
      botMessage("Redirecting to the materials page...");
      window.open("https://www.sciastra.com/materials/");
    } else if (userMsg.includes("team" || "teams")) {
      botMessage("Redirecting to the teams page...");
      window.open("https://www.sciastra.com/teams/");
    } else if (userMsg.includes("contact" || "materials")) {
      botMessage("Redirecting to the contact page...");
      window.open("https://www.sciastra.com/contact/");
    } else if (userMsg.includes(("office" && "location") || "located")) {
      botMessage("SciAstra Education Pvt Ltd, Bhubaneswar, Odisha");
    } else if (userMsg.includes("phone" || "number" || "phn")) {
      botMessage("+917570020363");
    } else if (userMsg.includes("email" || "mail")) {
      botMessage("support@sciastra.com");
    } else if (userMsg.includes("what" && "date" && "today")) {
      let date = new Date();
      let today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
      botMessage(today);
    } else if (userMsg.includes("your" && "name")) {
      botMessage("I don't have any name, but you can call me Mr.Chatbot");
    } else {
      // If no custom question matches, send a default bot response
      botMessage("This is a dummy response");
    }
  }, 300);
}

chatbotToggle.addEventListener("click", toggleChatbot);
chatbotSubmit.addEventListener("click", sendMessage);
chatbotInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});
