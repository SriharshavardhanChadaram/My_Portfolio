window.addEventListener("DOMContentLoaded", () => {
  if (!window.Typed) {
    return;
  }

  new Typed(".typed-text", {
    strings: ["Python Developer", "Data Analyst", "Power BI Developer"],
    typeSpeed: 58,
    backSpeed: 34,
    backDelay: 1450,
    smartBackspace: true,
    loop: true
  });
});
