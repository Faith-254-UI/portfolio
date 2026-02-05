// Simple script to show the current year automatically in footer
document.addEventListener("DOMContentLoaded", function () {

    const footer = document.querySelector("footer p");
    const year = new Date().getFullYear();

    footer.innerHTML = "© " + year + " Faith Niva Olesi";

    // Add fade-in animations to all sections
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.classList.add("fade-in");
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});
