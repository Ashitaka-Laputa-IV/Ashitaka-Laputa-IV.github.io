(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const progress = $("#scrollProgress");
  const header = $(".site-header");
  const navLinks = $$(".nav-links a");
  const sections = navLinks
    .map((link) => {
      const id = link.getAttribute("href");
      const section = id ? $(id) : null;
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0}%`;
    }

    const marker = window.scrollY + window.innerHeight * 0.32;
    let current = sections[0];
    for (const item of sections) {
      if (item.section.offsetTop <= marker) current = item;
    }
    for (const item of sections) {
      item.link.classList.toggle("is-active", item === current);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const reveals = $$(".reveal");
  if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -36px" },
    );
    for (const item of reveals) observer.observe(item);
  } else {
    for (const item of reveals) item.classList.add("is-visible");
  }

  const copyStatus = $("#copy-status");
  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) {
        /* fall through */
      }
    }
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (_) {
      ok = false;
    }
    area.remove();
    return ok;
  }

  for (const button of $$("[data-copy-email]")) {
    button.addEventListener("click", async () => {
      const ok = await copyText(button.dataset.copyEmail || "Ashitaka-Laputa-IV@outlook.com");
      const old = button.textContent;
      button.textContent = ok ? "已复制" : "复制失败";
      if (copyStatus) copyStatus.textContent = ok ? "邮箱已复制" : "复制失败";
      window.setTimeout(() => {
        button.textContent = old;
      }, 1500);
    });
  }

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
})();
