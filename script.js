document.addEventListener("DOMContentLoaded", () => {
    // Dynamically set footer copyright year
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    console.log("The Koeksister Aunty website is live!");
});