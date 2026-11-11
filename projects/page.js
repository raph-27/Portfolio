(function () {
  var nav = document.querySelector("nav");
  var syncNav = function () { nav.classList.toggle("floating", window.scrollY > 100); };
  window.addEventListener("scroll", syncNav, { passive: true });
  syncNav();

  var $ = function (id) { return document.getElementById(id); };
  var year = new Date().getFullYear();
  if ($("footer")) $("footer").textContent = "© " + year + " Raphael De Luis";

})();
