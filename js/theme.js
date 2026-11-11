/* Day / night mode. Follows the visitor's system or browser setting automatically and
   updates live when it changes. The ◐ button is a temporary override for the current
   visit only (it is forgotten when the tab closes, so the site goes back to "auto"). */
(function () {
  var root = document.documentElement;
  var mq = window.matchMedia("(prefers-color-scheme: dark)");

  function override() { try { return sessionStorage.getItem("theme"); } catch (e) { return null; } }
  function apply() { root.dataset.theme = override() || (mq.matches ? "dark" : "light"); }

  apply();   // runs in <head>, before first paint, so there is no flash of the wrong theme

  var onChange = function () { if (!override()) apply(); };
  if (mq.addEventListener) mq.addEventListener("change", onChange); else if (mq.addListener) mq.addListener(onChange);

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("themeBtn");
    if (!btn) return;
    btn.onclick = function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      try { sessionStorage.setItem("theme", next); } catch (e) {}
      root.dataset.theme = next;
    };
  });
})();
