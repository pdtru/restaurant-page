import NavBar from './NavBar';

class Header {
  navBar = new NavBar();

  className;

  calculateLayout = () => {
    if (window.innerWidth < window.innerHeight) {
      this.className = 'mobile-header';
    } else {
      this.className = 'header';
    }
  };

  render = () => {
    this.calculateLayout();
    const container = document.createElement('div');
    container.className = this.className;
    container.appendChild(this.navBar.render());
    return container;
  };
}

export default Header;
