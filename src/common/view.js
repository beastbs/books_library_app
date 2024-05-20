export class AbstructView {
  constructor() {
    this.$root = document.getElementById('root');
  }
  setTitle(title) {
    document.title = title;
  }
  render() {
    return;
  }

  destroy() {
    return;
  }
}
