// Typing Effect
const message = "Hai, Budak Kecik 👋";
const typingEl = document.getElementById("typing");
let index = 0;

function typeText() {
  if (index < message.length) {
    typingEl.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeText, 70);
  } else {
    typingEl.classList.remove("typing");
  }
}

typeText();

function showMessage() {
  alert("Ayo semangat terus ya Budak Kecik Kamu hebat 💪🌈");
}

function showPasswordPrompt() {
  document.getElementById("password-box").style.display = "block";
  document.getElementById("password-input").focus();
}

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const secretBox = document.getElementById("secret-message");
  const wrongPass = document.getElementById("wrong-pass");

  if (input === "semangat") {
    secretBox.style.display = "block";
    document.getElementById("password-box").style.display = "none";
    wrongPass.classList.add("hidden");
  } else {
    wrongPass.classList.remove("hidden");
  }
}
