import { AbstructView } from '../../common/view';
import Card from '../card';

import './favorites.css';

export class Favorites extends AbstructView {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    const $el = document.createElement('div');
    $el.classList.add('favorites');
    $el.innerHTML = `
	   <h1 class="favorites__title">Favorites List</h1>
     <div class="favorites__list"></div>
     <a href="/#">Go Home Page</a>
	 `;
    this.$root.querySelector('.main')?.remove();
    this.$root.append($el);

    const favList = $el.querySelector('.favorites__list')
    const cardList = this.appState.favorites.map(card => new Card(this.appState, card))
    cardList.forEach(Card => {
      favList.append(Card.render())
    })
  }
}
