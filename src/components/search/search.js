import { DivComponent } from '../../common/div-component';

import search from '../../../static/search.svg';
import searchButton from '../../../static/search-button.svg';

import './search.css';

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  search(){
    const value = this.$el.querySelector('.search__input').value;
    this.state.searchQuery = value;
  }

  render() {
    this.$el.classList.add('search');
    this.$el.innerHTML = `
      <div class="search__wrapper">
        <input
          type="text"
          placeholder="Найти книгу или автора..." 
          class="search__input"
          value="${this.state.searchQuery ? this.state.searchQuery : ''}"
          />
          <img src="${search}" alt="search" />
      </div>

      <button
        aria-label="search">
        <img src="${searchButton}" alt="search" />
      </button>
    `;

    this.$el.querySelector('button').addEventListener('click', this.search.bind(this));
    this.$el.querySelector('.search__input').addEventListener('keydown', (e) => {
      if(e.code === 'Enter'){
        this.search()
      }
    })

    return this.$el;
  }
}
