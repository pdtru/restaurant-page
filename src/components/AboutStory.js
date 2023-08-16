class AboutStory {
  render = () => {
    const container = document.createElement('div');
    container.className = 'about-story-container';

    const logo = document.createElement('p');
    logo.className = 'about-story-logo';
    logo.innerText = 'Tout Bleu';

    const header = document.createElement('p');
    header.className = 'about-story-header';
    header.innerText = 'OUR STORY';

    const text = document.createElement('p');
    text.className = 'about-story-text';
    text.innerText =
      "Welcome to Tout Bleu where you'll immerse yourself in the harmonious elegance of the French and Japanese culinary arts. At Tout Bleu, we invite you on a gastronomic journey that transcends borders and indulges your senses in the harmonious blend of French and Japanese culinary traditions. Nestled at the heart of the Grand Line, our restaurant is a serene oasis where innovation meets authenticity, and where every dish tells a story of cultural fusion.";

    container.append(logo, header, text);
    return container;
  };
}

export default AboutStory;
