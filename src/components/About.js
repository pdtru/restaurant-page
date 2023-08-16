class About {
  render = () => {
    const container = document.createElement('div');
    container.className = 'about';
    const header = document.createElement('p');
    header.className = 'about-header';
    const subText = document.createElement('p');
    subText.className = 'about-sub-text';

    container.append(header, subText);
    return container;
  };
}

export default About;
