const addButton = document.querySelector('#add-button');

addButton.addEventListener('click', () => {
  const input = document.querySelector('#input');
  const text = input.value.trim(); //trim() 은 공백을 제거해주는 함수이다.

  if (text !== '') {
    addToList(text);
    input.value = '';
    input.focus();
  }
});

function addToList(text) {
  const list = document.querySelector('#list');

  const newListItem = document.createElement('li');
  newListItem.classList.add('list-item'); 

  newListItem.innerHTML = text;

  list.appendChild(newListItem);
}