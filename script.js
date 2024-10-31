let movies = [];

function showAdminSection() {
    document.getElementById('admin-section').style.display = 'block';
    document.getElementById('customer-section').style.display = 'none';
}

function showCustomerSection() {
    document.getElementById('admin-section').style.display = 'none';
    document.getElementById('customer-section').style.display = 'block';
    displayMoviesForCustomers();
}

document.getElementById('movie-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const id = document.getElementById('movie-id').value;
    const movie = {
        id: id || Date.now().toString(),
        title: document.getElementById('movie-title').value,
        language: document.getElementById('movie-language').value,
        genre: document.getElementById('movie-genre').value,
        director: document.getElementById('movie-director').value,
        trailer: document.getElementById('movie-trailer').value,
        description: document.getElementById('movie-description').value,
        duration: document.getElementById('movie-duration').value,
        startDate: document.getElementById('movie-start-date').value,
        endDate: document.getElementById('movie-end-date').value,
    };

    if (id) {
        // Update movie
        const index = movies.findIndex(m => m.id === id);
        movies[index] = movie;
    } else {
        // Add new movie
        movies.push(movie);
    }

    document.getElementById('movie-form').reset();
    displayMovies();
});

function displayMovies() {
    const moviesList = document.getElementById('movies-list');
    moviesList.innerHTML = '';
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${movie.title}</strong> (${movie.language} - ${movie.genre}) - ${movie.director}<br>
            <button onclick="editMovie('${movie.id}')">Edit</button>
            <button onclick="deleteMovie('${movie.id}')">Delete</button>
        `;
        moviesList.appendChild(li);
    });
}

function editMovie(id) {
    const movie = movies.find(m => m.id === id);
    document.getElementById('movie-id').value = movie.id;
    document.getElementById('movie-title').value = movie.title;
    document.getElementById('movie-language').value = movie.language;
    document.getElementById('movie-genre').value = movie.genre;
    document.getElementById('movie-director').value = movie.director;
    document.getElementById('movie-trailer').value = movie.trailer;
    document.getElementById('movie-description').value = movie.description;
    document.getElementById('movie-duration').value = movie.duration;
    document.getElementById('movie-start-date').value = movie.startDate;
    document.getElementById('movie-end-date').value = movie.endDate;
}

function deleteMovie(id) {
    movies = movies.filter(m => m.id !== id);
    displayMovies();
}

function displayMoviesForCustomers() {
    const customerMoviesList = document.getElementById('customer-movies-list');
    customerMoviesList.innerHTML = '';
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `
            <h3>${movie.title}</h3>
            <p><strong>Language:</strong> ${movie.language}</p>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Description:</strong> ${movie.description}</p>
            <p><strong>Duration:</strong> ${movie.duration} minutes</p>
            <p><strong>Start Date:</strong> ${movie.startDate}</p>
            <p><strong>End Date:</strong> ${movie.endDate}</p>
            <p><a href="${movie.trailer}" target="_blank">Watch Trailer</a></p>
        `;
        customerMoviesList.appendChild(movieDiv);
    });
}
