import { NowPlaying, Upcoming, Likes, Detail } from '../views/pages';

const routes = {
  '/': NowPlaying,
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/likes': Likes,
  '/detail/:id': Detail,
};

export default routes;
