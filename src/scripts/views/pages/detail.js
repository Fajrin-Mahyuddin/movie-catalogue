import API_ENDPOINT from '../../globals/api-endpoint';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/likeButton-initiator';
import { createMovieDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    // eslint-disable-next-line quotes
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await fetch(API_ENDPOINT.DETAIL(url.id));
    const item = await detail.json();
    const movie = document.querySelector('#movie');
    movie.innerHTML = createMovieDetailTemplate(item);

    const buttonContainer = document.querySelector('#likeButtonContainer');
    LikeButtonInitiator.init({
      likeButtonContainer: buttonContainer,
      movie: {
        id: item.id,
        title: item.title,
        overview: item.overview,
        backdrop_path: item.backdrop_path,
        vote_average: item.vote_average,
      },
    });
  },
};

export default Detail;
