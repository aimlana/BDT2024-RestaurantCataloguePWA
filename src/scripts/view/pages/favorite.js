import FavoriteRestaurantIdb from '../../../public/data/favorite-restaurant-db';
import { createRestoItemTemplate } from '../templates/template-creators';

const Favorite = {
  async render() {
    return `
      <div id="favoriteContent">
        <h2>Your Liked Restaurant</h2>
        <div id="restos" class="restos"></div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestaurantIdb.getAllRestos();
    const restosContainer = document.querySelector('#restos');

    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorite;
