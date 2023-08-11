import { page, render } from '..';
import Home from './Home';

class Title {
  home = new Home();
  render = () => {
    const container = document.createElement('div');
    container.className = 'title';
    container.innerText = 'Tout Bleu';
    container.onclick = this.onClick;
    return container;
  };
  onClick = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
    page.component = new Home();
    render();
  };
}

export default Title;
