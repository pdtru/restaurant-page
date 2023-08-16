class Home {
  render = () => {
    const container = document.createElement('div');
    container.className = 'home';
    const text = document.createElement('p');
    text.className = 'welcome';
    text.innerText = 'Welcome to';
    const logo = document.createElement('p');
    logo.className = 'logo';
    logo.innerText = 'Tout Bleu';
    container.append(text, logo);
    return container;
  };
}

export default Home;
