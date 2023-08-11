import MenuTitle from './MenuTitle';
import MenuItem from './MenuItem';

class Starters {
  menuTitle = new MenuTitle('Starters');
  amuseBouches = new MenuItem('Five Amuse Bouches', 'sdafasdfasd');
  milleFeuille = new MenuItem('Mushroom Mille Feuille');
  okakiage = new MenuItem('Okakiage Tempura');

  render() {
    const container = document.createElement('div');
    container.className = 'starters';
    container.append(
      this.menuTitle.render(),
      this.amuseBouches.render(),
      this.milleFeuille.render(),
      this.okakiage.render()
    );
    return container;
  }
}

export default Starters;
