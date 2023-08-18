import '/src/styles/styles.css';
import Page from './components/Page';
import Header from './components/Header';
import Footer from './components/Footer';
import favicon from '/src/assets/images/logo.png?v=2';

function setFavicons(favImg) {
  let headTitle = document.querySelector('head');
  let setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel', 'shortcut icon');
  setFavicon.setAttribute('href', favImg);
  headTitle.appendChild(setFavicon);
}
setFavicons(favicon);

const header = new Header();
const page = new Page();
const footer = new Footer();

const body = document.body;
const render = () => {
  body.innerHTML = '';
  body.append(header.render(), page.render(), footer.render());
};
render();

(function () {
  addEventListener('load', render);
  addEventListener('resize', render);
})();

export { render, header, page, footer };
