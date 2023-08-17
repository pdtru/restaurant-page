class AboutStory {
  containerClassName;
  logoClassName;
  headerClassName;
  textClassName;

  calculateLayout = () => {
    if (window.innerWidth < window.innerHeight) {
      this.containerClassName = 'mobile-about-story-container';
      this.logoClassName = 'mobile-about-story-logo';
      this.headerClassName = 'mobile-about-story-header';
      this.textClassName = 'mobile-about-story-text';
    } else {
      this.containerClassName = 'about-story-container';
      this.logoClassName = 'about-story-logo';
      this.headerClassName = 'about-story-header';
      this.textClassName = 'about-story-text';
    }
  };

  render = () => {
    this.calculateLayout();
    const container = document.createElement('div');
    container.className = this.containerClassName;

    const logo = document.createElement('p');
    logo.className = this.logoClassName;
    logo.innerText = 'Tout Bleu';

    const header = document.createElement('p');
    header.className = this.headerClassName;
    header.innerText = 'STORY';

    const text = document.createElement('p');
    text.className = this.textClassName;
    text.innerText =
      "Welcome to Tout Bleu where you'll immerse yourself in the harmonious elegance of the French and Japanese culinary arts. At Tout Bleu, we invite you on a gastronomic journey that transcends borders and indulges your senses in the harmonious blend of French and Japanese culinary traditions. Nestled at the heart of the Grand Line, our restaurant is a serene oasis where innovation meets authenticity, and where every dish tells a story of cultural fusion.";

    container.append(logo, header, text);
    return container;
  };
}

export default AboutStory;
