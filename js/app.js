window.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("main section[id]");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (window.AOS) {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 80
    });
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.classList.toggle("is-active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });
  }

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-active");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navItems.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0
    }
  );

  sections.forEach((section) => observer.observe(section));

  const counters = document.querySelectorAll("[data-counter]");
  const counterObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const element = entry.target;
        const target = Number(element.dataset.counter);
        const duration = target > 100 ? 1300 : 900;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(target * eased);
          element.textContent = target === 8 ? (value || 0).toFixed(1) : value;

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            element.textContent = target === 8 ? "8.0" : String(target);
          }
        }

        requestAnimationFrame(tick);
        obs.unobserve(element);
      });
    },
    { threshold: 0.55 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));

  if (window.gsap) {
    gsap.registerPlugin(window.ScrollTrigger);

    gsap.from(".navbar", {
      y: -28,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out"
    });

    gsap.from(".hero-copy > *", {
      y: 34,
      stagger: 0.1,
      duration: 0.72,
      ease: "power3.out",
      delay: 0.18
    });

    gsap.from(".portrait-wrap", {
      scale: 0.9,
      duration: 0.82,
      ease: "power3.out",
      delay: 0.36
    });

    gsap.utils.toArray(".section-heading").forEach((heading) => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: "top 82%"
        },
        y: 30,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out"
      });
    });
  }
});
