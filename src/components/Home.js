class Home {
  render = () => {
    const container = document.createElement('div');
    container.className = 'home';
    const welcome = document.createElement('p');
    welcome.className = 'welcome';
    welcome.innerText = 'Welcome to';
    const logo = document.createElement('p');
    logo.className = 'logo';
    logo.innerText = 'Tout Bleu';
    container.append(welcome, logo);
    return container;
  };
}

export default Home;
