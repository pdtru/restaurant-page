import NavButton from './NavButton';

class NavBar {
  home = new NavButton('Home');
  menu = new NavButton('Menu');
  gallery = new NavButton('Gallery');
  about = new NavButton('About');
  render = () => {
    const container = document.createElement('div');
    container.className = 'nav-container';
    container.append(this.home.render());
    container.append(this.menu.render());
    container.append(this.gallery.render());
    container.append(this.about.render());
    return container;
  };
}

export default NavBar;
