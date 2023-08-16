class AboutChef {
  render = () => {
    const container = document.createElement('div');
    container.className = 'about-chef-container';

    const header = document.createElement('p');
    header.className = 'about-chef-header';
    header.innerText = 'Meet Our';

    const subHeader = document.createElement('p');
    subHeader.className = 'about-chef-sub-header';
    subHeader.innerText = 'CHEF';

    const chefContainer = document.createElement('div');
    chefContainer.className = 'about-chef';

    const text = document.createElement('p');
    text.className = 'about-chef-text';
    text.innerText =
      'At the heart of our kitchen stands the indomitable culinary genius, Owner and Head Chef Sanji. Sanji brings to life a menu that mirrors his adventurous spirit - each dish a masterpiece, an embodiment of his passion and mastery over both Japanese and French cuisine.';

    const sanji = document.createElement('img');
    sanji.className = 'sanji';
    sanji.src = '/src/assets/images/sanji.jpg';

    chefContainer.append(text, sanji);
    container.append(header, subHeader, chefContainer);
    return container;
  };
}

export default AboutChef;
