import components from './components.js';

const main = async () => {
  try {
    await components.getRestaurants();
    components.sortRestaurants();
    components.createTable();
  } catch (error) {
    console.error(error.message);
  }
};

main();
