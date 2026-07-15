window.addEventListener("load", () => {
  if (!window.particlesJS) {
    return;
  }

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 78,
        density: {
          enable: true,
          value_area: 900
        }
      },
      color: {
        value: ["#38d9c7", "#f5c451", "#ff7a59", "#9ae66e"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.34,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 142,
        color: "#38d9c7",
        opacity: 0.17,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.6,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 155,
          line_linked: {
            opacity: 0.34
          }
        },
        push: {
          particles_nb: 3
        }
      }
    },
    retina_detect: true
  });
});
