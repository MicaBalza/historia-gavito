let root = document.documentElement;
let themeSelect = document.querySelector("#theme-select");

themeSelect.addEventListener("change", changeTheme);

function changeTheme(e) {
  if (e.target.value === "dark") {
    root.style.setProperty("--color-background", "#0B132B");
    root.style.setProperty("--color-surface", "#1C2541");
    root.style.setProperty("--color-text", "#5BC0BE");
    root.style.setProperty("--color-accent", "#6FFFE9");
  } else if (e.target.value === "light") {
    root.style.setProperty("--color-background", "");
    root.style.setProperty("--color-surface", "");
    root.style.setProperty("--color-text", "");
    root.style.setProperty("--color-accent", "");
  }
}
