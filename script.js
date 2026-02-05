document.addEventListener("DOMContentLoaded", function () {

    // Footer Year
    const footer = document.querySelector("footer p");
    const year = new Date().getFullYear();
    footer.innerHTML = "© " + year + " Faith Niva Olesi";

    // Scroll Animations
    const sections = document.querySelectorAll(".fade-in");

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
