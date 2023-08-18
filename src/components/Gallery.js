import bûcheDeNoël from '/src/assets/images/bûche-de-noël.jpg';
import fiveAmuseBouches from '/src/assets/images/five-amuse-bouches.jpg';
import hainaneseChicken from '/src/assets/images/hainanese-chicken.jpg';
import lePlatVéritable from '/src/assets/images/le-plat-véritable.jpg';
import lemonCake from '/src/assets/images/lemon-cake.jpg';
import meatOnStick from '/src/assets/images/meat-on-stick.jpg';
import mushroomMilleFeuille from '/src/assets/images/mushroom-mille-feuille.jpg';
import okakiageTempura from '/src/assets/images/okakiage-tempura.jpg';
import stuffedQuail from '/src/assets/images/quail-stuffed-with-risotto.jpg';
import shootingStarSoba from '/src/assets/images/shooting-star-soba.jpg';
import souffleLegerDeGrace from '/src/assets/images/souffle-leger-de-grace.jpg';
import terrin from '/src/assets/images/terrine.jpg';

class Gallery {
  className;
  imgClassName;

  calculateLayout = () => {
    if (window.innerWidth < window.innerHeight) {
      this.className = 'mobile-gallery';
      this.imgClassName = 'mobile-gallery-img';
    } else {
      this.className = 'gallery';
      this.imgClassName = 'gallery-img';
    }
  };

  render = () => {
    this.calculateLayout();
    const container = document.createElement('div');
    container.className = this.className;

    const noël = document.createElement('img');
    noël.className = this.imgClassName;
    noël.src = bûcheDeNoël;

    const bûche = document.createElement('img');
    bûche.className = this.imgClassName;
    bûche.src = fiveAmuseBouches;

    const hainanese = document.createElement('img');
    hainanese.className = this.imgClassName;
    hainanese.src = hainaneseChicken;

    const véritable = document.createElement('img');
    véritable.className = this.imgClassName;
    véritable.src = lePlatVéritable;

    const lemon = document.createElement('img');
    lemon.className = this.imgClassName;
    lemon.src = lemonCake;

    const meat = document.createElement('img');
    meat.className = this.imgClassName;
    meat.src = meatOnStick;

    const mushroom = document.createElement('img');
    mushroom.className = this.imgClassName;
    mushroom.src = mushroomMilleFeuille;

    const okakiage = document.createElement('img');
    okakiage.className = this.imgClassName;
    okakiage.src = okakiageTempura;

    const quail = document.createElement('img');
    quail.className = this.imgClassName;
    quail.src = stuffedQuail;

    const soba = document.createElement('img');
    soba.className = this.imgClassName;
    soba.src = shootingStarSoba;

    const souffle = document.createElement('img');
    souffle.className = this.imgClassName;
    souffle.src = souffleLegerDeGrace;

    const terrine = document.createElement('img');
    terrine.className = this.imgClassName;
    terrine.src = terrin;

    container.append(
      noël,
      bûche,
      hainanese,
      véritable,
      lemon,
      meat,
      mushroom,
      okakiage,
      quail,
      soba,
      souffle,
      terrine
    );
    return container;
  };
}

export default Gallery;
