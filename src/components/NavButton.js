import { page, render } from '..';
import Home from './Home';
import Menu from './Menu';
import Gallery from './Gallery';
import About from './About';

class NavButton {
  constructor(text) {
    this.text = text;
  }
  render = () => {
    const container = document.createElement('button');
    container.className = 'nav-button';
    container.innerText = this.text;
    container.onclick = this.onClick;
    return container;
  };

  onClick = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
    switch (this.text) {
      case 'Menu':
        page.component = new Menu();
        break;
      case 'Gallery':
        page.component = new Gallery();
        break;
      case 'About':
        page.component = new About();
        break;
      default:
        page.component = new Home();
        break;
    }
    render();
  };
}

export default NavButton;
