import Starters from './Starters';
import Main from './Main';
import Dessert from './Dessert';
import Drinks from './Drinks';

class Menu {
  starters = new Starters();
  main = new Main();
  dessert = new Dessert();
  drinks = new Drinks();
  render = () => {
    const container = document.createElement('div');
    container.className = 'menu';
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
