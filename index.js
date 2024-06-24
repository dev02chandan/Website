// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// New JavaScript for the greeting popup
window.addEventListener("load", function () {
  const greetingPopup = document.getElementById("greeting-popup");
  const overlay = document.getElementById("overlay");

  // Show the greeting and overlay
  greetingPopup.style.opacity = "1";
  overlay.style.opacity = "1";

  // Hide the greeting and overlay after 3 seconds
  setTimeout(() => {
    greetingPopup.style.opacity = "0";
    overlay.style.opacity = "0";

    // Remove the elements from the DOM after the fade-out
    setTimeout(() => {
      greetingPopup.remove();
      overlay.remove();
    }, 500);
  }, 3000);
});
