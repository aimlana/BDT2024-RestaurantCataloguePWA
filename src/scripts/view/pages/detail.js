import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestoDetailTemplate,
  createRestoReviewTemplate,
  createFavoriteButtonTemplate,
} from '../templates/template-creators';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restoDetails"></div>
      <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailResto(url.id);

    const restoContainer = document.querySelector('#restoDetails');
    restoContainer.innerHTML += createRestoDetailTemplate(resto);

    restoContainer.innerHTML += `
      <div id="detailReview">
        <h3>Customer Reviews</h3>
      </div>
    `;

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        city: resto.city,
        description: resto.description,
        pictureId: resto.pictureId,
        rating: resto.rating,
      },
    });

    const detailReview = document.querySelector('#detailReview');
    resto.customerReviews.forEach((review) => {
      detailReview.innerHTML += createRestoReviewTemplate(review);
    });
  },
};

export default Detail;
