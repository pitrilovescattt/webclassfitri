// TYPING EFFECT
const text = "Welcome to Our Class ✨";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

typing();

// DARK MODE
const btn = document.getElementById("darkModeBtn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
