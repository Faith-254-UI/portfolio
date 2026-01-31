// Simple script to show the current year automatically in footer

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer p");

    const year = new Date().getFullYear();

    footer.innerHTML = "© " + year + " Faith Niva Olesi";
});
