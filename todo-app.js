const myForm = document.querySelector('#myForm');
const myField = document.querySelector('.myField');
const myList = document.querySelector('#myList');
const todoTitle = document.querySelector('.todo-title');

myForm.addEventListener('submit', (e) => {
	e.preventDefault();
	createItem(myField.value);
});

function createItem(x) {
	const listItem = `<li class='list'>${x} 
		<span onClick='deleteItem(this)' class='btnDelete'> x </span> `;
	myList.insertAdjacentHTML('beforeend', listItem);
	myField.value = '';
	myField.focus();
}

function deleteItem(i) {
	i.parentElement.remove();
}
