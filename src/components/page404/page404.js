import { AbstructView } from '../../common/view';

import './page404.css';

export class Page404 extends AbstructView {
  constructor() {
    super();
	  this.setTitle = 'Page 404'
  }

  render() {
    const $el = document.createElement('div');
    $el.classList.add('page404');
    $el.innerHTML = `
		<h1>404</h1>
		<p>Page Not Found</p>
		`;

    this.$root.append($el);
  }
}
