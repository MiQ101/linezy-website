// Closes the language menu on a click outside it or on Escape. Nothing else; no tracking.
(function () {
  function openMenus() { return document.querySelectorAll("details.lang[open]"); }
  document.addEventListener("click", function (e) {
    openMenus().forEach(function (d) { if (!d.contains(e.target)) d.open = false; });
  });
  document.addEventListener("focusin", function (e) {
    openMenus().forEach(function (d) { if (!d.contains(e.target)) d.open = false; });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    openMenus().forEach(function (d) { d.open = false; d.querySelector("summary").focus(); });
  });
})();
