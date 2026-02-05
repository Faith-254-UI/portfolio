// Footer Year Auto Update
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer p");
    const year = new Date().getFullYear();
    footer.innerHTML = "© " + year + " Faith Niva Olesi";
});

// Scroll Fade-in Animation
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.classList.add("fade-in");
    });

    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            const screen = window.innerHeight;

            if (position < screen - 100) {
                section.classList.add("show");
            }
        });
    });
});
