class Home {
  render = () => {
    const container = document.createElement('div');
    container.className = 'home';

    const text = document.createElement('p');
    text.className = 'home-hero';
    text.innerText = 'Welcome to';

    const logo = document.createElement('p');
    logo.className = 'home-logo';
    logo.innerText = 'Tout Bleu';

    container.append(text, logo);
    return container;
  };
}

export default Home;
