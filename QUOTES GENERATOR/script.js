const quotes = [
   "Believe in yourself.",
   "Every day is a new beginning.",
   "Push through the pain.",
   "God has a plan for you.",
   "Stay humble, work hard, be kind.",
   "Divine timing is never wrong.",
   "Faith makes all things possible.",
   "Patience is also a form of action."
];

var quoteText = document.getElementById("quoteText");
var newQuoteBtn = document.getElementById("newQuoteBtn");

newQuoteBtn.addEventListener("click", () => {
   const randomIndex = Math.floor(Math.random() * quotes.length);
   quoteText.textContent = quotes[randomIndex]
})
