const url = 'https://www.course-api.com/react-tours-project';

// console.log(fetch(url));

// === using .then().catch()
// fetch(url)
//   .then(response => response.json())
//   .then(responseData => console.log(responseData))
//   .catch(err => console.log(err));

// === using async/await

const getTours = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const msg = `There was an error '${response.status} ${response.statusText}'`;
      throw new Error(msg);
    }
    const tours = await response.json();
    console.log(tours);
  } catch (error) {
    console.log(error);
  }
};
const btn = document.getElementById('btn');
btn.addEventListener('click', getTours);
