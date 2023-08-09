class Title {
  render = () => {
    const container = document.createElement('div');
    container.className = 'title';
    container.innerText = 'Tout Bleu';
    return container;
  };
}

export default Title;
