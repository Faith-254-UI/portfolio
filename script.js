// Show current year in footer
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer p");
    const year = new Date().getFullYear();
    footer.innerHTML = "© " + year + " Faith Niva Olesi";
});

// Scroll animation effect
window.addEventListener("scroll", function () {
  let sections = document.querySelectorAll("section");

  sections.forEach(section => {
    let position = section.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      section.classList.add("active");
    }
  });
});
