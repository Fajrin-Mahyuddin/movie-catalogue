import API_ENDPOINT from "../../globals/api-endpoint";
import UrlParser from "../../routes/url-parser";
import { createMovieDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    // eslint-disable-next-line quotes
    return `
      <div id="movie" class="movie"></div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await fetch(API_ENDPOINT.DETAIL(url.id));
    const item = await detail.json();
    console.log(item);
    const movie = document.querySelector("#movie");
    movie.innerHTML = createMovieDetailTemplate(item);
  },
};

export default Detail;
