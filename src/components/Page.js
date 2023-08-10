import Home from './Home';

class Page {
  constructor() {
    this.component = new Home();
  }

  render = () => {
    const container = document.createElement('div');
    container.className = 'page';
    container.id = 'content';
    container.append(this.component.render());
    return container;
  };
}

export default Page;
