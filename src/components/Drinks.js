import MenuTitle from './MenuTitle';
import MenuItem from './MenuItem';

class Drinks {
  menuTitle = new MenuTitle('DRINKS');
  blanc = new MenuItem(
    'BLANC DE BLANC',
    'Familiar aromas of grape jelly, cherry turnover, and cinnamon'
  );
  pinot = new MenuItem('LUX PINOT NOIR', 'Ripe red fruit and earthy aromas');
  rosé = new MenuItem(
    'SPARKLING ROSÉ',
    'Creamy with strawberry and crisp green apple flavors'
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
      this.blanc.render(),
      this.pinot.render(),
      this.rosé.render()
    );
    return container;
  }
}

export default Drinks;
