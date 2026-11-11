(function () {
  var nav = document.querySelector("nav");
  var syncNav = function () { nav.classList.toggle("floating", window.scrollY > 100); };
  window.addEventListener("scroll", syncNav, { passive: true });
  syncNav();

  var $ = function (id) { return document.getElementById(id); };
  var year = new Date().getFullYear();
  if ($("footer")) $("footer").textContent = "© " + year + " Raphael De Luis";

  var root = document.documentElement, theme;
  try { theme = localStorage.getItem("theme"); } catch (e) {}
  if (!theme) theme = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  root.dataset.theme = theme;
  if ($("themeBtn")) $("themeBtn").onclick = function () {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  };
})();
