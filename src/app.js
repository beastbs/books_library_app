import Favorites from './components/favorites';
import Page404 from './components/page404';
import MainView from './views/main';

class App {
  routes = [
    { path: '', view: MainView },
    { path: '#favorites', view: Favorites }
  ];

  appState = {
    favorites: [],
  };

  constructor() {
    window.addEventListener('hashchange', this.route.bind(this));
    this.route();
    console.log(this);
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }
    const View = this.routes.find((r) => r.path == location.hash)?.view || Page404;
    this.currentView = new View(this.appState);
    this.currentView.render();
  }
}

new App();
