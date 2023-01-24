const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 10;

function displayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

        userData.forEach((element) => {
            console.log(element); // 100, 200, 300
        });
		let item_element = document.querySelector('li');
		item_element.innerHTML = ` <li>
        <div class="contact-details">
          <img class="avatar">${userData.image}
          <h3>${userData.name}</h3>
          <span class="email"></span>
        </div>
        <div class="joined-details">
          <span class="date">${userData.joined}</span>
        </div>
      </li>`;
		
		}
}

function setupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = paginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function paginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		displayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

displayList(userData, list_element, rows, current_page);
setupPagination(userData, pagination_element, rows);

