const button = document.getElementById("magicButton");
const message = document.getElementById("message");
const body = document.body;

const gradients = [
  "linear-gradient(135deg, #4f46e5, #ec4899)",
  "linear-gradient(135deg, #22c55e, #0ea5e9)",
  "linear-gradient(135deg, #f97316, #ef4444)",
  "linear-gradient(135deg, #6366f1, #14b8a6)"
];

const texts = [
  "You are doing better than you think.",
  "One small step can change everything.",
  "Cloud + Code = Unlimited possibilities.",
  "Today is a great day to build something new."
];

let index = 0;

button.addEventListener("click", () => {
  index = (index + 1) % gradients.length;
  body.style.background = gradients[index];
  message.textContent = texts[index];

  // small click animation via JS
  button.style.transform = "translateY(-2px) scale(1.05)";
  setTimeout(() => {
    button.style.transform = "";
  }, 150);
});
