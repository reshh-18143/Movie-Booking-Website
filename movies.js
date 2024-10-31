const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dates = document.querySelector('.dates');

prev.addEventListener('click', () => {
    dates.scrollBy({
        left: -100, // Adjust this value for scroll amount
        behavior: 'smooth'
    });
});

next.addEventListener('click', () => {
    dates.scrollBy({
        left: 100, // Adjust this value for scroll amount
        behavior: 'smooth'
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const dateButtons = document.querySelectorAll(".date-button");
    const showtimeButtons = document.querySelectorAll(".showtimes button");

    // Load the selected date button from localStorage
    const selectedDate = localStorage.getItem("selectedDate");
    if (selectedDate) {
        dateButtons.forEach(button => {
            if (button.textContent.trim() === selectedDate) {
                button.classList.add("selected");
            }
        });
    }

    // Load the selected showtime button from localStorage
    const selectedShowtime = localStorage.getItem("selectedShowtime");
    if (selectedShowtime) {
        showtimeButtons.forEach(button => {
            if (button.textContent.trim() === selectedShowtime) {
                button.classList.add("selected");
            }
        });
    }

    // Handle date button selection
    dateButtons.forEach(button => {
        button.addEventListener("click", function() {
            dateButtons.forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
            localStorage.setItem("selectedDate", this.textContent.trim());
        });
    });

    // Handle showtime button selection
    showtimeButtons.forEach(button => {
        button.addEventListener("click", function() {
            showtimeButtons.forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
            localStorage.setItem("selectedShowtime", this.textContent.trim());
        });
    });
});
