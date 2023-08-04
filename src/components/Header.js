import Title from './Title';

class Header {
  title = new Title();
  render = () => {
    const container = document.createElement('div');
    container.className = 'header-container';
    container.append(this.title.render());
    return container;
  };
}

export default Header;
