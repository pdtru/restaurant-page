class NavButton {
  render = (text) => {
    const container = document.createElement('button');
    container.innerText = text;
    container.className = 'nav-button';
    return container;
  };
}

export default NavButton;
