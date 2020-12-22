//const { moviesMock } = require('../utils/mocks/movies');
const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }
  async getMovies({ tags } = {}) {
    const query = tags && { tags: { $in: tags } };
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
    // const movies = await Promise.resolve(moviesMock);
  }

  async getMovie({ movieId }) {
    const movies = await this.mongoDB.get(this.collection, movieId);
    return movies || [];
    // const movie = await Promise.resolve(moviesMock[0]);
  }

  async createMovie({ movie }) {
    const movies = await this.mongoDB.create(this.collection, movie);
    return movies || [];
    // const createMovieId = await Promise.resolve(moviesMock[0].id);
  }

  async updateMovie({ movieId, movie } = {}) {
    const movies = await this.mongoDB.update(this.collection, movieId, movie);
    return movies || [];
    //const updatedMovieId = await Promise.resolve(moviesMock[0].id);
  }

  async deleteMovie({ movieId }) {
    const movies = await this.mongoDB.delete(this.collection, movieId);
    return movies || [];
    // const deletedMovieId = await Promise.resolve(moviesMock[0].id);
  }
}
module.exports = MoviesService;
