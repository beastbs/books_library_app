import { DivComponent } from '../../common/div-component';
import Card from '../card';

import './card-list.css';

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    if (this.parentState.loading) {
      this.$el.innerHTML = `
        <div class="card-list__loader">Loading...</div>
      `;
      return this.$el;
    }

  const cardState = [
    {
      ['cover_edition_key']: 'OL25662116M',
      subject: ['Holidays & Celebrations - Christmas & Advent', 'Juvenile poetry', 'Poetry'],
      title: 'Harry Potter and the Order of the Phoenix',
      ['author_name']: ['J. K. Rowling'],
    },
    {
      ['cover_edition_key']: 'OL22856696M',
      subject: ['Santa in juvenile prison', 'Juvenile poetry', 'Poetry'],
      title: 'The Night Before Christmas',
      ['author_name']: ['J. K. Rowling'],
      key: 1
    }
  ];

    this.$el.classList.add('card-list');
    // <h1 class="card-list__title">Найдено книг - ${this.parentState.numFound}</h1>
    this.$el.innerHTML = `
		  <h1 class="card-list__title">Найдено книг - ${cardState.length}</h1>
      <div class="card-list__wrapper"></div>
		`;

    const cardListWrapper = this.$el.querySelector('.card-list__wrapper');
    // for(const card of this.parentState.list){
    //   cardListWrapper.append(new Card(this.appState, card).render())
    // }

    const cardList = cardState.map((card) =>
      new Card(this.appState, card)
    );
    cardList.forEach((Card) => cardListWrapper.append(Card.render()));

    return this.$el;
  }
}
