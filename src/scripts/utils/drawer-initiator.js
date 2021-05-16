/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({
    button,
    drawer,
    content,
    link,
  }) {
    button.addEventListener('click', (e) => {
      this._toggleDrawer(e, drawer);
    });
    content.addEventListener('click', (e) => {
      this._closeDrawer(e, drawer);
    });
    window.addEventListener('resize', (e) => {
      this._closeDrawer(e, drawer);
    });
    [].forEach.call(link, (element) => {
      element.addEventListener('click', (e) => {
        this._closeDrawer(e, drawer);
      });
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
