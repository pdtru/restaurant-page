import MenuTitle from './MenuTitle';
import MenuItem from './MenuItem';

class Main {
  menuTitle = new MenuTitle('MAIN');
  hainanese = new MenuItem(
    'HAINANESE CHICKEN',
    'Poached chicken and fragrant rice in a symphony of southeast asian spices'
  );
  oyakodon = new MenuItem(
    'LE-PLAT-VÉRITABLE',
    'Tender chicken and velvety eggs in harmonious union'
  );
  meat = new MenuItem('MEAT ON BONE', 'Juicy meat adorned on primal bone');
  soba = new MenuItem(
    'SHOOTING STAR SOBA',
    'Delicate buckwheat noodles in savory broth'
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
      this.hainanese.render(),
      this.oyakodon.render(),
      this.meat.render(),
      this.soba.render()
    );
    return container;
  }
}

export default Main;
