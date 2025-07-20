function generateColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
  return `#${hex}`;
}

function generatePalette(count = 20) {
  const palette = document.getElementById("palette");
  palette.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const color = generateColor();
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;

    const label = document.createElement("span");
    label.textContent = color;
    box.appendChild(label);

    box.onclick = () => {
      navigator.clipboard.writeText(color).then(() => {
        label.textContent = `✔ ${color}`;
        setTimeout(() => {
          label.textContent = color;
        }, 1000);
      });
    };

    palette.appendChild(box);
  }
}

document.getElementById("generateBtn").addEventListener("click", () => generatePalette());
window.onload = () => generatePalette();
