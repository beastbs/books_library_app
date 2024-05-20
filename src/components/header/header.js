import { DivComponent } from '../../common/div-component';

import logo from '../../../static/logotype.svg';
import search from '../../../static/search.svg';
import favorites from '../../../static/favorites.svg';

import './header.css';

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.$el.classList.add('header', 'container');
    this.$el.innerHTML = `

      <div class="header__logo">
        <img src="${logo}" alt="logotype" />
      </div>

      <ul class="header__list">
        <li class="header__item">
          <img src="${search}" alt="search" />
          <a href="#">Поиск книг</a>
        </li>
        <li class="header__item">
          <img src="${favorites}" alt="favorites" />
          <a href="#favorites">Избранное</a>
          <div class="header__counter">${this.appState.favorites.length}</div>
        </li>
      </ul>
	 `;

    return this.$el;
  }
}
