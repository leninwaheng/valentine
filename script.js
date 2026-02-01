const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesSize = 18;
let noTexts = [
  "Are you sure?",
  "Really sure??",
  "Think again 🥺",
  "Don't break my heart 💔",
  "Last chance 😳"
];
let count = 0;

noBtn.addEventListener("click", () => {
  yesSize += 12;
  yesBtn.style.fontSize = yesSize + "px";

  noBtn.textContent = noTexts[count % noTexts.length];
  count++;

  // Optional: move No button slightly
  noBtn.style.transform = `translate(${Math.random()*40 - 20}px, ${Math.random()*40 - 20}px)`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center;">
      <h1>YAYYYY!! 💖🥰</h1>
      <p>I knew you'd say yes 😌</p>
      <img src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif" width="280">
    </div>
  `;
});
