class Title {
  render = () => {
    const container = document.createElement('h1');
    container.className = 'title';
    container.innerText = 'Tout Bleu';
    return container;
  };
}

export default Title;
