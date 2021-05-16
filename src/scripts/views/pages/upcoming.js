/* eslint-disable no-console */
import API_ENDPOINT from '../../globals/api-endpoint';
import { createMovieItemTemplate } from '../templates/template-creator';

const Upcoming = {
  async render() {
    // eslint-disable-next-line quotes
    return `
    <div class="content">
      <h2 class="content__heading">Upcoming</h2>
      <div id="movies" class="movies">

      </div>
    </div>
    `;
  },
  async afterRender() {
    const upcoming = await fetch(API_ENDPOINT.UPCOMING);
    const toJson = await upcoming.json();
    const movie = document.querySelector('#movies');
    toJson.results.forEach((item) => {
      movie.innerHTML += createMovieItemTemplate(item);
    });
  },
};

export default Upcoming;
