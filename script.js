// Universele decrypted text effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
const elements = document.querySelectorAll(".decrypt");

function decryptText(element, delay = 0) {
  const originalText = element.textContent;
  let iteration = 0;

  element.textContent = ""; // leeg begin

  setTimeout(() => {
    const interval = setInterval(() => {
      element.textContent = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) return originalText[index];
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= originalText.length) clearInterval(interval);
      iteration += 1 / 2;
    }, 30);
  }, delay);
}

// start het effect op alle elementen
window.onload = () => {
  elements.forEach((el, i) => {
    decryptText(el, i * 200); // kleine vertraging tussen elk element
  });
};
