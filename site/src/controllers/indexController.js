//const moviesDB = require('../data/movies');
const db = require('../database/models')
//const movies = moviesDB.getMovies();

module.exports = {
    index: async (req, res) => {
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

            //let mostSawMovies;
            //let sales = 
            


            //let premiereMovies = await movies.;

            res.render('index', {
                title: 'Kairak',
                css: '',
                movies,
                categories,
                genres
            })
            
        } catch (error) {
            res.render('error', {error});
        }


        
    }
}