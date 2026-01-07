const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copyBtn");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}<>?/";

lengthValue.innerText = lengthEl.value;

lengthEl.addEventListener("input", () => {
  lengthValue.innerText = lengthEl.value;
});

generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  let chars = "";

  if (uppercaseEl.checked) chars += upper;
  if (lowercaseEl.checked) chars += lower;
  if (numbersEl.checked) chars += numbers;
  if (symbolsEl.checked) chars += symbols;

  if (chars === "") {
    alert("Select at least one option!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordEl.value = password;
});

copyBtn.addEventListener("click", () => {
  if (passwordEl.value === "") return;
  navigator.clipboard.writeText(passwordEl.value);
  alert("Password Copied!");
});