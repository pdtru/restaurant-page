import MenuTitle from './MenuTitle';
import MenuItem from './MenuItem';

class Starters {
  menuTitle = new MenuTitle('STARTERS');
  amuseBouches = new MenuItem(
    'FIVE AMUSE BOUCHES',
    'Delicate preludes to delightful gastronomy'
  );
  milleFeuille = new MenuItem(
    'MUSHROOM MILLE FEUILLE',
    'Layers of buttery puff pastry embrace a symphony of wild mushrooms'
  );
  okakiage = new MenuItem(
    'OKAKIAGE TEMPURA',
    'A medley of meticulously battered and fried seasonal vegetables and seafood'
  );
  terrine = new MenuItem(
    'RAINBOW TERRINE',
    'Harmonizing layers of fresh ingredients into a visually stunning composition'
  );

  className = 'mobile-course';

  calculateLayout = () => {
    if (window.innerWidth < window.innerHeight) {
      this.className = 'mobile-course';
    } else {
      this.className = 'course';
    }
  };

  render() {
    this.calculateLayout();
    const container = document.createElement('div');
    container.className = this.className;
    container.append(
      this.menuTitle.render(),
      this.amuseBouches.render(),
      this.milleFeuille.render(),
      this.okakiage.render(),
      this.terrine.render()
    );
    return container;
  }
}

export default Starters;
