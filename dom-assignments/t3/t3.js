const navigator = window.navigator;
const browserName = navigator.userAgentData.brands[2].brand;
const browserVersion = navigator.userAgentData.brands[2].version;

const target = document.querySelector('#target');

target.innerHTML = `
  <p>Browser Name: ${browserName}</p>
  <p>Browser Version: ${browserVersion}</p>
  <p>Screen Width: ${screen.width}</p>
  <p>Screen Height: ${screen.height}</p>
  <p>Available Screen Width: ${screen.availWidth}</p>
  <p>Available Screen Height: ${screen.availHeight}</p>
  <p>Current date: ${new Date().toLocaleDateString()}</p>
  <p>Current time: ${new Date().toLocaleTimeString()}</p>
`;
