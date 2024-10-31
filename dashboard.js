// // Mock data to simulate movie list
// let movies = [
//     { id: 1, name: "Kalki 2898", image: "kalki.jpg" },
//     { id: 2, name: "Avengers", image: "avengers.jpg" },
//     { id: 3, name: "Salaar", image: "salaar.jpg" },
//     // Add other movies...
// ];

// // Function to handle Edit operation
// function editMovie(button) {
//     const movieItem = button.closest('.movie-item');
//     const movieId = parseInt(movieItem.getAttribute('data-id'));
//     const movie = movies.find(m => m.id === movieId);
    
//     const newMovieName = prompt("Edit Movie Name:", movie.name);
//     if (newMovieName) {
//         movie.name = newMovieName;
//         movieItem.querySelector('h3').textContent = newMovieName;
//         console.log(`Movie ID ${movieId} edited to: ${newMovieName}`);
//         // Update the movie list in your backend or local storage here
//     }
// }

// // Function to handle Delete operation
// function deleteMovie(button) {
//     const movieItem = button.closest('.movie-item');
//     const movieId = parseInt(movieItem.getAttribute('data-id'));

//     const confirmation = confirm("Are you sure you want to delete this movie?");
//     if (confirmation) {
//         movieItem.remove(); // Remove the movie item from the DOM
//         movies = movies.filter(m => m.id !== movieId); // Remove from movies array
//         console.log(`Movie ID ${movieId} deleted`);
//         // Update the movie list in your backend or local storage here
//     }
// }

// // Optional: Save and Load Movies from Local Storage
// function saveMovies() {
//     localStorage.setItem('movies', JSON.stringify(movies));
// }

// function loadMovies() {
//     const storedMovies = localStorage.getItem('movies');
//     if (storedMovies) {
//         movies = JSON.parse(storedMovies);
//         // Re-render the movie list in the UI if needed
//     }
// }

// document.addEventListener('DOMContentLoaded', loadMovies);
// function saveMovies() {
//     localStorage.setItem('movies', JSON.stringify(movies));
// }

// function loadMovies() {
//     const storedMovies = localStorage.getItem('movies');
//     if (storedMovies) {
//         movies = JSON.parse(storedMovies);
//         // Logic to render movies dynamically in the DOM
//     }
// }
// // Function to add a movie
// document.getElementById('addMovieForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const title = document.getElementById('title').value;
//     const imageUrl = document.getElementById('imageUrl').value;
//     const language = document.getElementById('language').value;
//     const genre = document.getElementById('genre').value;
//     const director = document.getElementById('director').value;
//     const startDate = document.getElementById('startDate').value;
//     const endDate = document.getElementById('endDate').value;

//     let movies = JSON.parse(localStorage.getItem('movies')) || [];

//     const newMovie = {
//         title,
//         imageUrl,
//         language,
//         genre,
//         director,
//         startDate,
//         endDate
//     };

//     movies.push(newMovie);
//     localStorage.setItem('movies', JSON.stringify(movies));
//     loadMovies();
//     this.reset(); // Reset form after submission
// });

// // Function to delete a movie
// function deleteMovie(index) {
//     let movies = JSON.parse(localStorage.getItem('movies')) || [];
//     movies.splice(index, 1);
//     localStorage.setItem('movies', JSON.stringify(movies));
//     loadMovies();
// }

// // Function to edit a movie
// function editMovie(index) {
//     let movies = JSON.parse(localStorage.getItem('movies')) || [];
//     const movie = movies[index];

//     document.getElementById('title').value = movie.title;
//     document.getElementById('imageUrl').value = movie.imageUrl;
//     document.getElementById('language').value = movie.language;
//     document.getElementById('genre').value = movie.genre;
//     document.getElementById('director').value = movie.director;
//     document.getElementById('startDate').value = movie.startDate;
//     document.getElementById('endDate').value = movie.endDate;

//     document.getElementById('addMovieForm').onsubmit = function(event) {
//         event.preventDefault();

//         movie.title = document.getElementById('title').value;
//         movie.imageUrl = document.getElementById('imageUrl').value;
//         movie.language = document.getElementById('language').value;
//         movie.genre = document.getElementById('genre').value;
//         movie.director = document.getElementById('director').value;
//         movie.startDate = document.getElementById('startDate').value;
//         movie.endDate = document.getElementById('endDate').value;

//         movies[index] = movie;
//         localStorage.setItem('movies', JSON.stringify(movies));
//         loadMovies();
//         this.reset(); // Reset form after editing
//         this.onsubmit = null; // Remove custom onsubmit handler
//         document.getElementById('addMovieForm').addEventListener('submit', addMovie);
//     }
// }
// // Load movies on page load
// document.addEventListener('DOMContentLoaded', loadMovies);
// // Function to load movies from localStorage
// function loadMovies() {
//     const movieList = document.getElementById('movieList');
//     movieList.innerHTML = '';

//     let movies = JSON.parse(localStorage.getItem('movies')) || [];
//     movies.forEach((movie, index) => {
//         const movieItem = document.createElement('div');
//         movieItem.className = 'movie-item';
//         movieItem.dataset.index = index;

//         movieItem.innerHTML = `
//             <img src="${movie.imageUrl}" alt="${movie.title}">
//             <h3>${movie.title}</h3>
//             <p><strong>Language:</strong> ${movie.language}</p>
//             <p><strong>Genre:</strong> ${movie.genre}</p>
//             <p><strong>Director:</strong> ${movie.director}</p>
//             <p><strong>Start Date:</strong> ${movie.startDate}</p>
//             <p><strong>End Date:</strong> ${movie.endDate}</p>
//             <button onclick="editMovie(${index})">Edit</button>
//             <button onclick="deleteMovie(${index})">Delete</button>
//         `;

//         movieList.appendChild(movieItem);
//     });
// }
// let movieIdCounter = movies.length + 1; // Initialize with the next available ID

// // Function to handle adding a new movie
// document.getElementById('movieForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     const newMovie = {
//         id: movieIdCounter++,
//         name: document.getElementById('movieTitle').value,
//         image: document.getElementById('movieImage').value,
//         language: document.getElementById('movieLanguage').value,
//         genre: document.getElementById('movieGenre').value,
//         director: document.getElementById('movieDirector').value,
//         startDate: document.getElementById('movieStartDate').value,
//         endDate: document.getElementById('movieEndDate').value
//     };

//     movies.push(newMovie);
//     addMovieToDOM(newMovie);
//     saveMovies(); // Save to local storage

//     // Reset the form
//     document.getElementById('movieForm').reset();
// });

// // Function to add a movie item to the DOM
// function addMovieToDOM(movie) {
//     const movieList = document.querySelector('.movie-list');
//     const movieItem = document.createElement('div');
//     movieItem.className = 'movie-item';
//     movieItem.setAttribute('data-id', movie.id);

//     movieItem.innerHTML = `
//         <img src="${movie.image}" alt="Movie Image">
//         <h3>${movie.name}</h3>
//         <button onclick="editMovie(this)">Edit</button>
//         <button onclick="deleteMovie(this)">Delete</button>
//     `;
    
//     movieList.appendChild(movieItem);
// }

// // Initial load of existing movies
// document.addEventListener('DOMContentLoaded', function() {
//     loadMovies(); // Load movies from local storage or existing array
//     movies.forEach(addMovieToDOM); // Render movies in the DOM
// });

// function loadMovies() {
//     const storedMovies = localStorage.getItem('movies');
//     if (storedMovies) {
//         movies = JSON.parse(storedMovies);
//     }
// }

// function saveMovies() {
//     localStorage.setItem('movies', JSON.stringify(movies));
// }
let movies = [
    { id: 1, name: "Kalki 2898", image: "kalki.jpg", language: "English", genre: "Sci-Fi", director: "Nag Ashwin", startDate: "2023-12-01", endDate: "2024-01-01" },
    { id: 2, name: "Avengers", image: "avengers.jpg", language: "English", genre: "Action", director: "Joss Whedon", startDate: "2023-11-01", endDate: "2023-12-01" },
    // Add more existing movies as needed...
];

let movieIdCounter = movies.length + 1;

// Load movies and render them on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    loadMovies();
    movies.forEach(addMovieToDOM);
});

// Handle adding a new movie
document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newMovie = {
        id: movieIdCounter++,
        name: document.getElementById('movieTitle').value,
        image: document.getElementById('movieImage').value,
        language: document.getElementById('movieLanguage').value,
        genre: document.getElementById('movieGenre').value,
        director: document.getElementById('movieDirector').value,
        startDate: document.getElementById('movieStartDate').value,
        endDate: document.getElementById('movieEndDate').value
    };

    movies.push(newMovie);
    addMovieToDOM(newMovie);
    saveMovies();
    document.getElementById('movieForm').reset();
});

// Function to add a movie item to the DOM
function addMovieToDOM(movie) {
    const movieList = document.querySelector('.movie-list');
    const movieItem = document.createElement('div');
    movieItem.className = 'movie-item';
    movieItem.setAttribute('data-id', movie.id);

    movieItem.innerHTML = `
        <img src="${movie.image}" alt="${movie.name}">
        <h3>${movie.name}</h3>
        <p>Language: ${movie.language}</p>
        <p>Genre: ${movie.genre}</p>
        <p>Director: ${movie.director}</p>
        <p>Showing from ${movie.startDate} to ${movie.endDate}</p>
        <button onclick="editMovie(this)">Edit</button>
        <button onclick="deleteMovie(this)">Delete</button>
    `;

    movieList.appendChild(movieItem);
}
// function editMovie(button) {
//     const movieItem = button.closest('.movie-item');
//     const movieId = parseInt(movieItem.getAttribute('data-id'));
//     const movie = movies.find(m => m.id === movieId);

//     if (!movie) {
//         console.error(`Movie with ID ${movieId} not found.`);
//         return;
//     }

//     // Prompt for new details
//     const newMovieName = prompt("Edit Movie Name:", movie.name);
//     const newMovieImage = prompt("Edit Movie Image URL:", movie.image);
//     const newMovieLanguage = prompt("Edit Movie Language:", movie.language);
//     const newMovieGenre = prompt("Edit Movie Genre:", movie.genre);
//     const newMovieDirector = prompt("Edit Movie Director:", movie.director);
//     const newMovieStartDate = prompt("Edit Movie Start Date:", movie.startDate);
//     const newMovieEndDate = prompt("Edit Movie End Date:", movie.endDate);

//     if (newMovieName && newMovieImage && newMovieLanguage && newMovieGenre && newMovieDirector && newMovieStartDate && newMovieEndDate) {
//         // Update the movie object
//         movie.name = newMovieName;
//         movie.image = newMovieImage;
//         movie.language = newMovieLanguage;
//         movie.genre = newMovieGenre;
//         movie.director = newMovieDirector;
//         movie.startDate = newMovieStartDate;
//         movie.endDate = newMovieEndDate;

//         // Update the DOM
//         movieItem.querySelector('h3').textContent = newMovieName;
//         movieItem.querySelector('img').src = newMovieImage;
//         movieItem.querySelector('img').alt = newMovieName;
//         movieItem.querySelector('p:nth-of-type(1)').textContent = `Language: ${newMovieLanguage}`;
//         movieItem.querySelector('p:nth-of-type(2)').textContent = `Genre: ${newMovieGenre}`;
//         movieItem.querySelector('p:nth-of-type(3)').textContent = `Director: ${newMovieDirector}`;
//         movieItem.querySelector('p:nth-of-type(4)').textContent = `Showing from ${newMovieStartDate} to ${newMovieEndDate}`;

//         saveMovies();
//     } else {
//         console.warn("Edit operation cancelled or invalid input.");
//     }
// }

// Function to handle Edit operation
function editMovie(button) {
    const movieItem = button.closest('.movie-item');
    const movieId = parseInt(movieItem.getAttribute('data-id'));
    const movie = movies.find(m => m.id === movieId);
    
    const newMovieName = prompt("Edit Movie Name:", movie.name);
    if (newMovieName) {
        movie.name = newMovieName;
        movieItem.querySelector('h3').textContent = newMovieName;
        saveMovies();
    }
}

// Function to handle Delete operation
function deleteMovie(button) {
    const movieItem = button.closest('.movie-item');
    const movieId = parseInt(movieItem.getAttribute('data-id'));

    const confirmation = confirm("Are you sure you want to delete this movie?");
    if (confirmation) {
        movieItem.remove();
        movies = movies.filter(m => m.id !== movieId);
        saveMovies();
    }
}

// Load and Save movies from/to Local Storage
function saveMovies() {
    localStorage.setItem('movies', JSON.stringify(movies));
}

function loadMovies() {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
        movies = JSON.parse(storedMovies);
        movieIdCounter = movies.length + 1; // Reset the counter based on loaded movies
    }
}
