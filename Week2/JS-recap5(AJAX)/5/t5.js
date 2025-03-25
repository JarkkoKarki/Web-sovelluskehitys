import {fetchData} from '../lib/fetchData.js';

// your code here
const apiUrl = 'https://media2.edu.metropolia.fi/restaurant/api/v1';
const taulukko = document.querySelector('#target');
const modal = document.querySelector('#modal');
let restaurants = [];

// html funktiot

function createRestaurantCells(restaurant, tr) {
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
}

function createModalHtml(restaurant, modal) {
  const nameH3 = document.createElement('h3');
  nameH3.innerText = restaurant.name;

  const addressP = document.createElement('p');
  addressP.innerText = restaurant.address;

  const cityP = document.createElement('p');
  cityP.innerText = restaurant.city;

  const postalP = document.createElement('p');
  postalP.innerText = restaurant.postalCode;

  const phoneP = document.createElement('p');
  phoneP.innerText = restaurant.phone;

  modal.append(nameH3, addressP, cityP, postalP, phoneP);
}

function createMenuHtml(courses) {
  let html = '';
  for (const course of courses) {
    html += `
  <article class="course">
      <p><strong>${course.name}</strong>,
      Hinta: ${course.price} €,
      Allergeenit: ${course.diets}</p>
  </article>
  `;
  }
  return html;
}

// hae kaikki ravintolat
async function getRestaurants() {
  try {
    restaurants = await fetchData(apiUrl + '/restaurants');
  } catch (error) {
    console.error(error.message);
  }
}

//hae tietyn ravintolan päivän menu

async function getDailyMenu(id, lang) {
  try {
    return await fetchData(`${apiUrl}/restaurants/daily/${id}/${lang}`);
  } catch (error) {
    console.error(error.message);
  }
}
// restaurants aakkosjärjestykseen

function sortRestaurants() {
  restaurants.sort(function (a, b) {
    return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
  });
}

function createTable() {
  for (const restaurant of restaurants) {
    // rivi
    const tr = document.createElement('tr');

    tr.addEventListener('click', async function () {
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
}

async function main() {
  try {
    await getRestaurants();
    sortRestaurants();
    createTable();
  } catch (error) {
    console.error(error.message);
  }
}

main();
