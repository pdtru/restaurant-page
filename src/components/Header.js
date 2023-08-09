import Title from './Title';
import NavBar from './NavBar';

class Header {
  title = new Title();
  navBar = new NavBar();

  render = () => {
    const container = document.createElement('div');
    container.className = 'header-container';
    container.append(this.title.render(), this.navBar.render());
    return container;
  };
}

export default Header;
