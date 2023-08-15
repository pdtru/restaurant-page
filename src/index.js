import '/src/styles/styles.css';
import Page from './components/Page';
import Header from './components/Header';
import Footer from './components/Footer';

const header = new Header();
const page = new Page();
const menu = document.getElementsByClassName('menu');
const gallery = document.getElementsByClassName('gallery');
const footer = new Footer();

const body = document.body;
const render = () => {
  body.innerHTML = '';
  body.append(header.render(), page.render(), footer.render());
};
render();

const restyle = (event) => {
  if (menu.length == 1 && window.innerWidth < window.innerHeight) {
    menu[0].style.flexDirection = 'column';
    menu[0].style.justifyContent = 'center';
  } else {
    menu[0].style.flexDirection = 'row';
  }
};

(function () {
  addEventListener('load', restyle);
  addEventListener('resize', restyle);
})();

export { render, header, page, footer };
