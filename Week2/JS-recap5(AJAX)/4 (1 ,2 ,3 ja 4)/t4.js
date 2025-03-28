import {fetchData} from '../lib/fetchData.js';

async function init() {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer',
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const userData = await fetchData(url, options);
    console.log('(T2) POST: ', userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

async function get() {
  try {
    const url = 'https://reqres.in/api/users?/page=2';
    const userData = await fetchData(url);
    console.log('(T1) GET: ', userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

async function put() {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer',
    };
    const url = 'https://reqres.in/api/users/2';
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const userData = await fetchData(url, options);
    console.log('(T4) PUT: ', userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

async function getError() {
  try {
    const url = 'https://reqres.in/api/unknown/23';
    const userData = await fetchData(url);
    console.log('(T3) GET Error: ', userData);
  } catch (error) {
    console.error('(T3) An error occurred wrong url:', error);
  }
}

init();
get();
getError();
put();
