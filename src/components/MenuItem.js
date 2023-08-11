class MenuItem {
  constructor(text, subtext) {
    this.text = text;
    this.subtext = subtext;
  }

  render() {
    const menuItem = document.createElement('p');
    menuItem.className = 'menu-item';
    menuItem.innerText = this.text;

    const itemSubText = document.createElement('p');
    itemSubText.className = 'sub-text';
    itemSubText.innerText = this.subtext;

    menuItem.appendChild(itemSubText);
    return menuItem;
  }
}

export default MenuItem;
