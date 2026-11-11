/* Click any image with class "shot" to view it larger, on the same page. */
(function () {
  var shots = document.querySelectorAll("img.shot");
  if (!shots.length) return;

  var box = document.createElement("div");
  box.className = "lightbox";
  box.hidden = true;
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Image preview");
  box.innerHTML = '<button type="button" class="lightbox-close" aria-label="Close">\u00D7</button><img alt="">';
  document.body.appendChild(box);

  var big = box.querySelector("img"), closeBtn = box.querySelector("button"), opener = null;

  function open(img) {
    opener = img;
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    box.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }
  function close() {
    box.hidden = true;
    big.removeAttribute("src");
    document.body.style.overflow = "";
    if (opener) opener.focus();
  }

  shots.forEach(function (img) {
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.addEventListener("click", function () { open(img); });
    img.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(img); } });
  });
  box.addEventListener("click", function (e) { if (e.target !== big) close(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !box.hidden) close(); });
})();
