import Home from './Home';

class Page {
  content = new Home();
  render = () => {
    const container = document.createElement('div');
    container.className = 'page';
    container.append(this.content.render());
    return container;
  };
}

export default Page;
