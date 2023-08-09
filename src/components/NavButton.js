class NavButton {
  render = (text) => {
    const container = document.createElement('button');
    container.className = 'nav-button';
    container.innerText = text;
    return container;
  };
}

export default NavButton;
