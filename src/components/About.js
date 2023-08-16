import AboutChef from './AboutChef';
import AboutStory from './AboutStory';

class About {
  aboutStory = new AboutStory();
  aboutChef = new AboutChef();

  render = () => {
    const container = document.createElement('div');
    container.className = 'about-container';

    container.append(this.aboutStory.render(), this.aboutChef.render());
    return container;
  };
}

export default About;
