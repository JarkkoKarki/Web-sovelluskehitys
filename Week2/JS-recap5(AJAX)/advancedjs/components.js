import {fetchData} from '../lib/fetchData.js';
import {apiUrl} from './variables.js';
import {sortByName} from './utils.js';

// your code here
const taulukko = document.querySelector('#target');
const modal = document.querySelector('#modal');
let restaurants = [];

// html funktiot

//arrow funktio + object destructuring
const createRestaurantCells = ({name, address, city}, tr) => {
  //nimisolu
  const nameTd = document.createElement('td');
  nameTd.innerText = name;

  //osoitesolu
  const addressTd = document.createElement('td');
  addressTd.innerText = address;
  //kaupunkisolu
  const cityTd = document.createElement('td');
  cityTd.innerText = city;

  //lisätään solut riviin
  tr.append(nameTd, addressTd, cityTd);
};

//Vanha
/*
const createRestaurantCells = (restaurant, tr) => {
  //nimisolu
  const nameTd = document.createElement('td');
  nameTd.innerText = restaurant.name;

  //osoitesolu
  const addressTd = document.createElement('td');
  addressTd.innerText = restaurant.address;
  //kaupunkisolu
  const cityTd = document.createElement('td');
  cityTd.innerText = restaurant.city;

  //lisätään solut riviin
  tr.append(nameTd, addressTd, cityTd);
};
*/
const createModalHtml = ({name, address, city, postalCode, phone}, modal) => {
  const restaurantName = document.createElement('h1');
  restaurantName.innerText = name;

  const addressP = document.createElement('p');
  addressP.innerText = address;

  const cityP = document.createElement('p');
  cityP.innerText = city;

  const postalP = document.createElement('p');
  postalP.innerText = postalCode;

  const phoneP = document.createElement('p');
  phoneP.innerText = phone;

  modal.append(restaurantName, addressP, cityP, postalP, phoneP);
};

const createMenuHtml = (courses) => {
  let html = '';
  for (const {name, price, diets} of courses) {
    html += `
  <article class="course">
      <p><strong>${name}</strong>,
      Hinta: ${price} €,
      Allergeenit: ${diets}</p>
  </article>
  `;
  }
  return html;
};

// hae kaikki ravintolat
const getRestaurants = async () => {
  try {
    restaurants = await fetchData(apiUrl + '/restaurants');
  } catch (error) {
    console.error(error.message);
  }
};

//hae tietyn ravintolan päivän menu

const getDailyMenu = async (id, lang) => {
  try {
    return await fetchData(`${apiUrl}/restaurants/daily/${id}/${lang}`);
  } catch (error) {
    console.error(error.message);
  }
};
// restaurants aakkosjärjestykseen

/*  Destrukturointi
const sortByName = ({name}, {name: bName}) =>
  name.toUpperCase() > bName.toUpperCase() ? 1 : -1;
*/
const sortRestaurants = () => {
  restaurants.sort(sortByName);
};

const createTable = () => {
  for (const restaurant of restaurants) {
    // rivi
    const tr = document.createElement('tr');

    tr.addEventListener('click', async () => {
      try {
        for (const elem of document.querySelectorAll('.highlight')) {
          elem.classList.remove('highlight');
        }

        tr.classList.add('highlight');
        //hae menu
        const coursesResponse = await getDailyMenu(restaurant._id, 'fi');
        // hae menu html
        const menuHtml = createMenuHtml(coursesResponse.courses);
        // tyhjennä modal
        modal.innerHTML = '';
        //luo modal
        createModalHtml(restaurant, modal);
        //lisää menu html
        modal.insertAdjacentHTML('beforeend', menuHtml);

        //avaa modal
        modal.showModal();
      } catch (error) {
        console.error(error.message);
      }
    });

    createRestaurantCells(restaurant, tr);
    taulukko.append(tr);
  }
};

export default {getRestaurants, sortRestaurants, createTable};
