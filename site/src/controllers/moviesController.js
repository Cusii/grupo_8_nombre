const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const moviesDB = require('../data/movies');
const movies = moviesDB.getMovies();

module.exports = {
    showMovies: async (req, res) => {
        try {
            let categories = await db.Category.findAll({
                order: [
                    ['id', 'ASC']
                ]
            });
            let genres = await db.Genre.findAll();

            let movies = await db.Movie.findAll({
                where: {
                    status: 1
                }
            });

            res.render('movies', {
                title: 'Nuestras Películas',
                css: '',
                categories,
                genres,
                movies
            })

        } catch (error) {
            res.render('error', {error});
        }
    },

    showMovie: async (req, res) => {
        try {
            let categories = await db.Category.findAll({
                order: [
                    ['id', 'ASC']
                ]
            });
            let genres = await db.Genre.findAll();

            let movie = await db.Movie.findOne({
                where: {
                    id: +req.params.id
                }
            });

            res.render('movieDetail', {
                title: movie.title,
                css: 'movieStyle',
                categories,
                genres,
                movies,
                movie
            })

        } catch (error) {
            res.render('error', {error});
        }
    },


    /* Admin */
    getMovies: async (req, res) => {
        let movies = await db.Movie.findAll({
            where: {
                status: 1
            }
        });

        res.render('admin/moviesList', {
            title: 'nuestras peliculas',
            css: '',
            movies
        })
    },

    /* detail: (req, res) => {
        const id = Number(req.params.id);

        let movie = movies.find(movie => movie.id === id);

        res.render('movieDetail', {
            title: movie.title,
            css: 'movieStyle',
            movies,
            movie
        });

    }, */

    toCreateMovie: (req, res) => {
        res.render('admin/createMovie', {
            title: 'Agregar pelicula',
            css: 'formStyles'
        })
    },

    createMovie: (req, res, next) => {
        const { title, description, price, year, length, category, genre, trailer, movie } = req.body;

        let lastID = 0;
        movies.forEach(movie => {
            if (movie.id > lastID) {
                lastID = movie.id
            }
        });
        lastID++;

        const newMovie = {
            id: lastID,
            title: title.trim(),
            description: description.trim(),
            price: +price,
            year: year,
            length: +length,
            category: category,
            genre: genre,
            image: req.file.filename,
            trailer: trailer.trim(),
            movie: movie.trim()
        };

        movies.push(newMovie);

        moviesDB.setMovies(movies);

        res.redirect(`/movies/${newMovie.id}`);
    },

    toEditMovie: (req, res) => {
        const movie = movies.find(movie => movie.id === +req.params.id);

        res.render('admin/editMovie', {
            title: movie.title,
            css: 'formStyles',
            movie
        });
    },

    updateMovie: (req, res, next) => {
        const id = +req.params.id;
        const { title, description, price, year, length, category, genre } = req.body;
        const imgFile = req.file;
        let imagePath = "";

        movies.forEach(movie => {
            if (movie.id === id) {
                imagePath = movie.image;

                if (imgFile) {
                    if (fs.existsSync(path.join('public', 'images', 'movies', movie.image))) {
                        fs.unlinkSync(path.join('public', 'images', 'movies', movie.image));
                    }
                    imagePath = req.file.filename
                }

                movie.id = id;
                movie.title = title;
                movie.description = description;
                movie.price = price;
                movie.year = year;
                movie.length = length;
                movie.category = category;
                movie.genre = genre;
                movie.image = imagePath;
            }
        });

        moviesDB.setMovies(movies);

        res.redirect(`/movies/${id}`);
    },

    deleteMovie: (req, res) => {
        const id = Number(req.params.id);

        movies.forEach(movie => {
            if (movie.id === id) {
                if (fs.existsSync(path.join('public', 'images', 'movies', movie.image))) {
                    fs.unlinkSync(path.join('public', 'images', 'movies', movie.image));
                }
                let movieToDelete = movies.indexOf(movie);
                movies.splice(movieToDelete, 1);
            }
        });

        moviesDB.setMovies(movies);

        res.redirect('/movies');

    }
}