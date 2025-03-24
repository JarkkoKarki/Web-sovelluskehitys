export async function fetchData(url, options) {
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}
