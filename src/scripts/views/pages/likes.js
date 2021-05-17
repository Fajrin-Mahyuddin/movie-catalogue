import FavoriteMovieIdb from '../../data/datamovie-idb';
import { createMovieItemTemplate } from '../templates/template-creator';

const Likes = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">Your Liked Movie</h2>
        <div id="movies" class="movies">
 
        </div>
      </div>`;
  },
  async afterRender() {
    const movie = await FavoriteMovieIdb.getAllMovie();
    const movieContainer = document.querySelector('#movies');
    movie.forEach((item) => {
      movieContainer.innerHTML += createMovieItemTemplate(item);
    });
  },
};

export default Likes;
