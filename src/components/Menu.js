import Starters from './Starters';

class Menu {
  starters = new Starters();
  render = () => {
    const container = document.createElement('div');
    container.className = 'menu';
    container.append(this.starters.render());
    return container;
  };
}

export default Menu;
