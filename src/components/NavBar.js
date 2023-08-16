import NavButton from './NavButton';

class NavBar {
  home = new NavButton('Home');
  menu = new NavButton('Menu');
  gallery = new NavButton('Gallery');
  about = new NavButton('About');

  className;

  calculateLayout = () => {
    if (window.innerWidth < window.innerHeight) {
      this.className = 'mobile-nav-container';
    } else {
      this.className = 'nav-container';
    }
  };

  render = () => {
    this.calculateLayout();
    const container = document.createElement('div');
    container.className = this.className;
    container.append(this.home.render());
    container.append(this.menu.render());
    container.append(this.gallery.render());
    container.append(this.about.render());
    return container;
  };
}

export default NavBar;
