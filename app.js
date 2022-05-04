const stylesheet = document.querySelector('[data-type="theme-stylesheet"]');
const themeSelector = document.querySelector('[data-type="theme-selector"]');
const currentTheme = localStorage.getItem("theme") || "light";

themeSelector.addEventListener("change", () => {
  activateTheme(themeSelector.value);
  localStorage.setItem("theme", themeSelector.value);
});

function activateTheme(themeName) {
  stylesheet.setAttribute("href", `css/themes/${themeName}.css`);
}

activateTheme(currentTheme);
themeSelector.value = currentTheme;
