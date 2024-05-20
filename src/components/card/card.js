import { DivComponent } from '../../common/div-component';
import favoritesActive from '../../../static/favorites.svg';
import favorites from '../../../static/favorites-active.svg';

import './card.css';

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  cutTitle(text, length = 36){
    return text.length > length ? text.slice(0, length) + '...' : text;
  }

  #handleAdd(){
    this.appState.favorites.push(this.cardState)
  }

  #handleDelete(){
    this.appState.favorites = this.appState.favorites.filter(book => book.key !== this.cardState.key)
  }

  render() {
    this.$el.classList.add('card');
    const existInFav = this.appState.favorites.find(
      (b) => b.key === this.cardState.key
    );
    this.$el.innerHTML = `
        <div class="card__img">
          <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="cover" />
        </div>
        <div class="card__info">
          <div class="card__tag">
           ${this.cutTitle(this.cardState.subject ? this.cardState.subject[0] : 'Не задано', 24)}
          </div>
            <div class="card__name">
            ${this.cutTitle(this.cardState.title)}
            </div>
            <div class="card__author">
            ${this.cardState.author_name ? this.cardState.author_name[0] : 'Не задано'}
            </div>
            <div class="card__footer ${existInFav ? 'button-active' : ''}">
               <button class="button-add">
                 <img src="${existInFav ? favoritesActive : favorites }" alt="favorite" />
               </button>
            </div>
        </div>
      `;

      const buttonToFav = this.$el.querySelector(".button-add");
      if(existInFav){
        buttonToFav.addEventListener('click', this.#handleDelete.bind(this))
      } else{
        buttonToFav.addEventListener('click', this.#handleAdd.bind(this))
      }

    return this.$el;
  }
}
