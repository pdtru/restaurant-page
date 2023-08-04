import '/src/styles/styles.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const header = new Header();
const home = new Home();
const footer = new Footer();

const body = document.body;
body.append(header.render());
body.append(home.render());
body.append(footer.render());
