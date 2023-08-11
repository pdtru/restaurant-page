class MenuTitle {
  constructor(text) {
    this.text = text;
  }

  render() {
    const container = document.createElement('p');
    container.className = 'menu-title';
    container.innerText = this.text;
    return container;
  }
}

export default MenuTitle;
