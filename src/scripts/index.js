import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/mobile-responsive.css';
import '../styles/tablet-responsive.css';
import App from './view/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
