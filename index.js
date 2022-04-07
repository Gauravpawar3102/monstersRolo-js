const name = document.querySelector('.card-name');
const id = document.querySelector('.card-email');
let input = document.getElementById('.searching-monsters');

const cardContainer = document.querySelector('.card-container');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((data) => {
    data.map((dataa) => {
      console.log(dataa);
      const card = document.createElement('div');
      card.classList.add('card-style');
      card.innerHTML = `<img ></img> <h1>${dataa.name}</h1><p>${dataa.email}</p>`;
      cardContainer.appendChild(card);
    });
  });
function searchingMosters() {
  for (i = 0; i < name.length; i++) {
    if (!name[i].innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
      name[i].style.display = 'none';
    } else {
      name[i].style.display = 'list-item';
    }
  }
}
