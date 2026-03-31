// Documentation interactions

(() => {
  const root = document.documentElement;

  // Theme toggle
  const themeToggle = document.querySelector(".doc-theme-toggle");
  const sunIcon = document.querySelector(".doc-theme-toggle-icon.sun");
  const moonIcon = document.querySelector(".doc-theme-toggle-icon.moon");

  const applyTheme = (theme) => {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      sunIcon.classList.add("active");
      moonIcon.classList.remove("active");
    } else {
      root.removeAttribute("data-theme");
      sunIcon.classList.remove("active");
      moonIcon.classList.add("active");
    }
    localStorage.setItem("prozen-doc-theme", theme);
  };

  const storedTheme = localStorage.getItem("prozen-doc-theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    applyTheme(storedTheme);
  } else {
    // Prefer dark by default
    applyTheme("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = root.getAttribute("data-theme") === "light";
      applyTheme(isLight ? "dark" : "light");
    });
  }

  // Smooth scroll + active nav highlighting
  const navLinks = Array.from(
    document.querySelectorAll(".doc-nav a[href^='#']")
  );

  const onNavClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      const rect = target.getBoundingClientRect();
      const offset = rect.top + window.scrollY - 72;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", onNavClick);
  });

  const sections = navLinks
    .map((link) => {
      const id = link.getAttribute("href");
      const el = id && id.startsWith("#") ? document.querySelector(id) : null;
      return el ? { id, el, link } : null;
    })
    .filter(Boolean);

  const updateActiveNav = () => {
    const scrollPos = window.scrollY;
    const viewHeight = window.innerHeight;
    let active = null;

    for (const item of sections) {
      const rect = item.el.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY;
      if (scrollPos + viewHeight * 0.25 >= offsetTop) {
        active = item;
      }
    }

    navLinks.forEach((l) => l.classList.remove("active"));
    if (active) {
      active.link.classList.add("active");
    }
  };

  window.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateActiveNav);
  });
  updateActiveNav();

  // Reveal sections on scroll
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("doc-section-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  document
    .querySelectorAll(".doc-section")
    .forEach((section) => revealObserver.observe(section));

  // Mobile sidebar toggle
  const sidebar = document.querySelector(".doc-sidebar");
  const sidebarToggle = document.querySelector(".doc-sidebar-toggle");

  if (sidebar && sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 960) {
          sidebar.classList.remove("open");
        }
      });
    });
  }
})();

