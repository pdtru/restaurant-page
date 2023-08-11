import '/src/styles/styles.css';
import Page from './components/Page';
import Header from './components/Header';
import Footer from './components/Footer';

const header = new Header();
const page = new Page();
const footer = new Footer();

const body = document.body;
const render = () => {
  body.innerHTML = '';
  body.append(header.render(), page.render(), footer.render());
};

render();

export { render, header, page, footer };
