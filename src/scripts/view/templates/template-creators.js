/* eslint-disable indent */
import CONFIG from '../../global/config';

const createRestoItemTemplate = (resto) => `
  <div class="card" tabindex="0">
    <a href="/#/detail/${resto.id}">
      <div class="image-container">
        <img src="${
          CONFIG.BASE_IMAGE_URL + resto.pictureId
        }" crossorigin="anonymous" alt="gambar restoran ${resto.name}">
      </div>
      <div class="card-content">
        <div class="card-head">
          <h2>${resto.name}</h2>
          <div class="rating">
            <i class="fa-solid fa-star"></i>
            <p>${resto.rating}</p>
          </div>
        </div>
        <div class="location">
          <i class="fa-solid fa-location-dot"></i>
          <p>${resto.city}</p>
        </div>
        <p>${resto.description}</p>
      </div>
    </a>
  </div>
`;

const createRestoDetailTemplate = (resto) => `
  <div class="detail">
  <div class="detail-content">
    <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
    <div class="detail-info">
      <h1 class="title" id="resto-title">
        ${resto.name}
      </h1>
        <ul>
          <li>
            <h3>Kota</h3>
            <p>${resto.city}</p>
          </li>
          <li>
            <h3>Alamat</h3>
            <p>${resto.address}</p>
          </li>
          <li>
            <h3>Rating</h3>
            <p>${resto.rating}</p>
          </li>
          <li>
            <h3>Foods Menu</h3>
            <span id="food">
            <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
            </span>
          </li>
          <li>
            <h3>Drinks Menu</h3>
            <span id="drink">
              <p>${resto.menus.drinks.map((food) => food.name).join(', ')}</p>
            </span>
          </li>
        </ul>
        <div class="overview">
          <h2>Overview</h2>
          <p>${resto.description}</p>
        </div>
    </div>
  </div>
  </div>
`;

const createRestoReviewTemplate = (reviews) => `
<i class="fa-solid fa-circle-user"></i>
  <div class="review">
    <p class="name">${reviews.name}</p>
    <p class="date">${reviews.date}</p>
    <p class="review-content">${reviews.review}</p>
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createRestoReviewTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
