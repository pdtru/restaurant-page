class Gallery {
  className = 'mobile-gallery';
  imgClassName = 'mobile-img';

  calculateLayout = () => {
    if (window.innerWidth < window.innerHeight) {
      this.className = 'mobile-gallery';
      this.imgClassName = 'mobile-img';
    } else {
      this.className = 'gallery';
      this.imgClassName = 'img';
    }
  };

  render = () => {
    this.calculateLayout();
    const container = document.createElement('div');
    container.className = this.className;

    const noël = document.createElement('img');
    noël.className = this.imgClassName;
    noël.src = '/src/assets/images/food/bûche-de-noël.jpg';

    const bûche = document.createElement('img');
    bûche.className = this.imgClassName;
    bûche.src = '/src/assets/images/food/five-amuse-bouches.jpg';

    const hainanese = document.createElement('img');
    hainanese.className = this.imgClassName;
    hainanese.src = '/src/assets/images/food/hainanese-chicken.jpg';

    const véritable = document.createElement('img');
    véritable.className = this.imgClassName;
    véritable.src = '/src/assets/images/food/le-plat-véritable.jpg';

    const lemon = document.createElement('img');
    lemon.className = this.imgClassName;
    lemon.src = '/src/assets/images/food/lemon-cake.jpg';

    const meat = document.createElement('img');
    meat.className = this.imgClassName;
    meat.src = '/src/assets/images/food/meat-on-stick.jpg';

    const mushroom = document.createElement('img');
    mushroom.className = this.imgClassName;
    mushroom.src = '/src/assets/images/food/mushroom-mille-feuille.jpg';

    const okakiage = document.createElement('img');
    okakiage.className = this.imgClassName;
    okakiage.src = '/src/assets/images/food/okakiage-tempura.jpg';

    const quail = document.createElement('img');
    quail.className = this.imgClassName;
    quail.src = '/src/assets/images/food/quail-stuffed-with-risotto.jpg';

    const soba = document.createElement('img');
    soba.className = this.imgClassName;
    soba.src = '/src/assets/images/food/shooting-star-soba.jpg';

    const souffle = document.createElement('img');
    souffle.className = this.imgClassName;
    souffle.src = '/src/assets/images/food/souffle-leger-de-grace.jpg';

    const terrine = document.createElement('img');
    terrine.className = this.imgClassName;
    terrine.src = '/src/assets/images/food/terrine.jpg';

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
