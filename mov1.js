// Function to add a movie
document.getElementById('addMovieForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const language = document.getElementById('language').value;
    const genre = document.getElementById('genre').value;
    const director = document.getElementById('director').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    let movies = JSON.parse(localStorage.getItem('movies')) || [];

    const newMovie = {
        title,
        imageUrl,
        language,
        genre,
        director,
        startDate,
        endDate
    };

    movies.push(newMovie);
    localStorage.setItem('movies', JSON.stringify(movies));
    loadMovies();
    this.reset(); // Reset form after submission
});

// Function to delete a movie
function deleteMovie(index) {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.splice(index, 1);
    localStorage.setItem('movies', JSON.stringify(movies));
    loadMovies();
}

// Function to edit a movie
function editMovie(index) {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    const movie = movies[index];

    document.getElementById('title').value = movie.title;
    document.getElementById('imageUrl').value = movie.imageUrl;
    document.getElementById('language').value = movie.language;
    document.getElementById('genre').value = movie.genre;
    document.getElementById('director').value = movie.director;
    document.getElementById('startDate').value = movie.startDate;
    document.getElementById('endDate').value = movie.endDate;

    document.getElementById('addMovieForm').onsubmit = function(event) {
        event.preventDefault();

        movie.title = document.getElementById('title').value;
        movie.imageUrl = document.getElementById('imageUrl').value;
        movie.language = document.getElementById('language').value;
        movie.genre = document.getElementById('genre').value;
        movie.director = document.getElementById('director').value;
        movie.startDate = document.getElementById('startDate').value;
        movie.endDate = document.getElementById('endDate').value;

        movies[index] = movie;
        localStorage.setItem('movies', JSON.stringify(movies));
        loadMovies();
        this.reset(); // Reset form after editing
        this.onsubmit = null; // Remove custom onsubmit handler
        document.getElementById('addMovieForm').addEventListener('submit', addMovie);
    }
}

// Load movies on page load
document.addEventListener('DOMContentLoaded', loadMovies);
// Function to load movies from localStorage
function loadMovies() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.forEach((movie, index) => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.dataset.index = index;

        movieItem.innerHTML = `
            <img src="${movie.imageUrl}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p><strong>Language:</strong> ${movie.language}</p>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Start Date:</strong> ${movie.startDate}</p>
            <p><strong>End Date:</strong> ${movie.endDate}</p>
            <button onclick="editMovie(${index})">Edit</button>
            <button onclick="deleteMovie(${index})">Delete</button>
        `;

        movieList.appendChild(movieItem);
    });
}
document.addEventListener('DOMContentLoaded', loadMovies);
function saveMovies() {
    localStorage.setItem('movies', JSON.stringify(movies));
}

function loadMovies() {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
        movies = JSON.parse(storedMovies);
        // Logic to render movies dynamically in the DOM
    }
}
// Load movies on page load
document.addEventListener('DOMContentLoaded', loadMovies);
// Function to load movies from localStorage
function loadMovies() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.forEach((movie, index) => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.dataset.index = index;

        movieItem.innerHTML = `
            <img src="${movie.imageUrl}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p><strong>Language:</strong> ${movie.language}</p>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Start Date:</strong> ${movie.startDate}</p>
            <p><strong>End Date:</strong> ${movie.endDate}</p>
            <button onclick="editMovie(${index})">Edit</button>
            <button onclick="deleteMovie(${index})">Delete</button>
        `;

        movieList.appendChild(movieItem);
    });
}