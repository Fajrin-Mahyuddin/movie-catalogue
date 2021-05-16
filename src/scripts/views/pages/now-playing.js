import API_ENDPOINT from "../../globals/api-endpoint";
import { createMovieItemTemplate } from "../templates/template-creator";

const NowPlaying = {
  async render() {
    // eslint-disable-next-line quotes
    return `
    <div class="content">
      <h2 class="content__heading">Now Playing In Cinema</h2>
      <div id="movies" class="movies">

      </div>
    </div>
    `;
  },
  async afterRender() {
    const now_playing = await fetch(API_ENDPOINT.NOW_PLAYING);
    const toJson = await now_playing.json();
    const movie = document.querySelector("#movies");
    toJson.results.forEach((item) => {
      movie.innerHTML += createMovieItemTemplate(item);
    });
  },
};

export default NowPlaying;
