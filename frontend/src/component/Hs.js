const fetchData = () => {
  return fetch('https://example.com/my-data.json')
    .then(response => response.json())
    .catch(error => console.error(error));
};

export default fetchData;
