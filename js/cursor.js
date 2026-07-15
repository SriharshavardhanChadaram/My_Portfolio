(function () {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");

  if (!dot || !ring || !window.matchMedia("(pointer: fine)").matches) {
    return;
  }

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  }

  renderCursor();

  document.querySelectorAll("a, button, .skill-card, .project-card").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      ring.style.width = "54px";
      ring.style.height = "54px";
      ring.style.borderColor = "rgba(245, 196, 81, 0.86)";
    });

    element.addEventListener("mouseleave", () => {
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "rgba(56, 217, 199, 0.64)";
    });
  });
})();
