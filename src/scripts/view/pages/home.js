import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creators';

const Home = {
  async render() {
    return `
      <!-- Hero -->
      <section class="hero">
        <div class="slogan">
          <h1>Kuliner Berkualitas</h1>
          <p>Temukan seleramu hingga ke ujung dunia</p>
        </div>
      </section>
      <!-- resto -->
      <section class="resto">
        <h1>Daftar Restaurant</h1>
        <div id="resto-list"></div>
      </section>
    `;
  },

  async afterRender() {
    const restos = await RestaurantSource.getResto();
    console.log(restos);
    const restoContainer = document.querySelector('#resto-list');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
