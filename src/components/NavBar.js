import NavButton from './NavButton';

class NavBar {
  home = new NavButton();
  menu = new NavButton();
  about = new NavButton();
  render = () => {
    const container = document.createElement('div');
    container.className = 'nav-container';
    container.append(this.home.render('Home'));
    container.append(this.menu.render('Menu'));
    container.append(this.about.render('About'));
    return container;
  };
}

export default NavBar;
