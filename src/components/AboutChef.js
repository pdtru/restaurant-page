class AboutChef {
  cotainerClassName;
  headerClassName;
  subHeaderClassName;
  textClassName;
  sanjiClassName;

  calculateLayout = () => {
    if (window.innerWidth < window.innerHeight) {
      this.cotainerClassName = 'mobile-about-chef-container';
      this.headerClassName = 'mobile-about-chef-header';
      this.subHeaderClassName = 'mobile-about-chef-sub-header';
      this.textClassName = 'mobile-about-chef-text';
      this.sanjiClassName = 'mobile-sanji';
    } else {
      this.cotainerClassName = 'about-chef-container';
      this.headerClassName = 'about-chef-header';
      this.subHeaderClassName = 'about-chef-sub-header';
      this.textClassName = 'about-chef-text';
      this.sanjiClassName = 'sanji';
    }
  };

  render = () => {
    this.calculateLayout();
    const container = document.createElement('div');
    container.className = this.cotainerClassName;

    const header = document.createElement('p');
    header.className = this.headerClassName;
    header.innerText = 'Meet Our';

    const subHeader = document.createElement('p');
    subHeader.className = this.subHeaderClassName;
    subHeader.innerText = 'CHEF';

    const chefContainer = document.createElement('div');
    chefContainer.className = 'about-chef';

    const text = document.createElement('p');
    text.className = this.textClassName;
    text.innerText =
      'At the heart of our kitchen stands the indomitable culinary genius, Owner and Head Chef Sanji. Sanji brings to life a menu that mirrors his adventurous spirit - each dish a masterpiece, an embodiment of his passion and mastery over both Japanese and French cuisine.';

    const sanji = document.createElement('img');
    sanji.className = this.sanjiClassName;
    sanji.src = '/src/assets/images/sanji.jpg';

    chefContainer.append(sanji, text);
    container.append(header, subHeader, chefContainer);
    return container;
  };
}

export default AboutChef;
