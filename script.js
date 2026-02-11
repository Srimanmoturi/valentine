const yesBtn = document.getElementById("yes-btn");
const noBtn  = document.getElementById("no-btn");
const msg    = document.getElementById("message");

// Messages that show when she clicks "No"
const noMessages = [
  "Are you sure? 🥺",
  "Think again... 😢",
  "My heart is breaking a little...",
  "I know you actually want to say yes 😏",
  "Last chance! 👀"
];

let noClickCount = 0;

yesBtn.addEventListener("click", () => {
  msg.textContent = "I knew you’d say yes! 💖 Can’t wait to see you on Valentine’s Day.";
  yesBtn.style.transform = "scale(1.2)";
  noBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
  if (noClickCount < noMessages.length) {
    msg.textContent = noMessages[noClickCount];
    noClickCount++;
    // Make Yes button grow a bit each time
    const scale = 1 + noClickCount * 0.1;
    yesBtn.style.transform = `scale(${scale})`;
  } else {
    msg.textContent = "Okay fine, but I still love you 💔 (and I think you’ll change your mind).";
  }
});
