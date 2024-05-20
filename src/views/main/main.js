import { AbstructView } from '../../common/view';
import onChange from 'on-change';
import Header from '../../components/header';
import Search from '../../components/search';
import CardList from '../../components/card-list';

export class MainView extends AbstructView {
  state = {
    list: [],
    numFound: 0,
    loading: false,
    error: null,
    searchQuery: undefined,
    offset: 0,
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.state = onChange(this.state, this.stateHook.bind(this));
    this.setTitle('Поиск книг');
  }

  destroy(){
    onChange.unsubscribe(this.appState);
    onChange.unsubscribe(this.state);
  }

  appStateHook(path, value, previousValue) {
    if (path === 'favorites') {
      console.log("PATH", path);
      console.log("VALUE", value);
      console.log("previousValue", previousValue);
      this.render()
    }
  }

  async stateHook(path) {
    try {
      if(path === 'searchQuery'){
          this.state.loading = true;
          const response = await this.loadList(this.state.searchQuery, this.state.offset);
  
          if(!response.ok){
            throw new Error(`Could not resolve ${response.url}, status ${response.status}`);
          }
  
          this.state.loading = false;
          const data = await response.json();
          
          console.log(data);
          this.state.numFound = data.numFound;
          this.state.list = data.docs;
        }

        if(path === "list" || path === 'loading'){
          this.render()
        }

      } catch (error) {
        this.state.error = error;
        this.state.loading = false;
  }
}

   async loadList(q, offset){
    return await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`)
  }

  render() {
    const main = document.createElement('div');
    main.classList.add('main', 'container');
    main.append(new Search(this.state).render());
    main.append(new CardList(this.appState, this.state).render());
    this.$root.innerHTML = '';
    this.$root.append(main);
    this.renderHeader();

  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.$root.prepend(header);
  }
}
