document.addEventListener('DOMContentLoaded', function () {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Set the current year in the HTML
    const copyrightYearSpan = document.getElementById('copyrightYear');
    if (copyrightYearSpan) {
        copyrightYearSpan.innerText = currentYear;
    }
});
