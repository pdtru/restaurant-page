import MenuTitle from './MenuTitle';
import MenuItem from './MenuItem';

class Drinks {
  menuTitle = new MenuTitle('Drinks');
  blanc = new MenuItem(
    'BLANC DE BLANC',
    'Familiar aromas of grape jelly, cherry turnover, and cinnamon'
  );
  pinot = new MenuItem('LUX PINOT NOIR', 'Ripe red fruit and earthy aromas');
  rosé = new MenuItem(
    'SPARKLING ROSÉ',
    'Creamy with strawberry and crisp green apple flavors'
  );
  sirah = new MenuItem(
    'PETITE SIRAH',
    'Aromas of mixed berries, herbs, and spice with balanced acidity and tannins'
  );

  render() {
    const container = document.createElement('div');
    container.className = 'course';
    container.append(
      this.menuTitle.render(),
      this.blanc.render(),
      this.pinot.render(),
      this.rosé.render(),
      this.sirah.render()
    );
    return container;
  }
}

export default Drinks;
