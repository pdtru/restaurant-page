class Gallery {
  render = () => {
    const container = document.createElement('div');
    container.className = 'gallery';

    const noël = document.createElement('img');
    noël.src = '/src/assets/images/food/bûche-de-noël.jpg';

    const bûche = document.createElement('img');
    bûche.src = '/src/assets/images/food/five-amuse-bouches.jpg';

    const hainanese = document.createElement('img');
    hainanese.src = '/src/assets/images/food/hainanese-chicken.jpg';

    const véritable = document.createElement('img');
    véritable.src = '/src/assets/images/food/le-plat-véritable.jpg';

    const lemon = document.createElement('img');
    lemon.src = '/src/assets/images/food/lemon-cake.jpg';

    const meat = document.createElement('img');
    meat.src = '/src/assets/images/food/meat-on-stick.jpg';

    const mushroom = document.createElement('img');
    mushroom.src = '/src/assets/images/food/mushroom-mille-feuille.jpg';

    const okakiage = document.createElement('img');
    okakiage.src = '/src/assets/images/food/okakiage-tempura.jpg';

    const quail = document.createElement('img');
    quail.src = '/src/assets/images/food/quail-stuffed-with-risotto.jpg';

    const soba = document.createElement('img');
    soba.src = '/src/assets/images/food/shooting-star-soba.jpg';

    const souffle = document.createElement('img');
    souffle.src = '/src/assets/images/food/souffle-leger-de-grace.jpg';

    const terrine = document.createElement('img');
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
