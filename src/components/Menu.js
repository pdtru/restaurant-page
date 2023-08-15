import Starters from './Starters';
import Main from './Main';
import Dessert from './Dessert';
import Drinks from './Drinks';

class Menu {
  starters = new Starters();
  main = new Main();
  dessert = new Dessert();
  drinks = new Drinks();

  className = 'mobile-menu';

  calculateLayout = () => {
    if (window.innerWidth < window.innerHeight) {
      this.className = 'mobile-menu';
    } else {
      this.className = 'menu';
    }
  };

  render = () => {
    this.calculateLayout();
    const container = document.createElement('div');
    container.className = this.className;
    container.append(
      this.starters.render(),
      this.main.render(),
      this.dessert.render(),
      this.drinks.render()
    );
    return container;
  };
}

export default Menu;
