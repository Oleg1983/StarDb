// https://swapi.co

const getResource = async (url) => {
  const res = await fetch(url);
  if(!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`);
  }
  const body = await res.json();
  return body;
};

getResource('https://swapi.co/api/people/1132123213/')
  .then(body => {
    console.log(body);
  })
  .catch((err) => {
    console.error('Could not fetch', err);
  });

// fetch('https://swapi.co/api/people/1/')
//   .then(res => {
//     console.log(res); // res.ok => true or false
//     return res.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => console.log(error));