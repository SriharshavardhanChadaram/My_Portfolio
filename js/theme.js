(function () {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const icon = toggle ? toggle.querySelector("i") : null;
  const savedTheme = localStorage.getItem("portfolio-theme");
  const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initialTheme = savedTheme || (systemPrefersLight ? "light" : "dark");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);

    if (icon) {
      icon.className = theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
  }

  applyTheme(initialTheme);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }
})();
