async function newFormHandler(event) {
	event.preventDefault();
	console.log('You clicked a button.');

	const title = document.querySelector('input[name="book-title"]').value;
	const isbn = document.querySelector('input[name="book-isbn"]').value;
	const author = document.querySelector('input[name="book-author"]').value;
	const feeling = document.querySelector('input[name="book-feeling"]:checked').value;

	const response = await fetch('/dashboard', {
		method: 'POST',
		body: JSON.stringify({
			title,
			isbn,
			author,
			feeling,
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	if (response.ok) {
		document.location.replace('/dashboard');
	} else {
		alert(response.statusText + '. Duplicate ISBN. Is that book already on your list?');
	}
}

document.querySelector('.new-book-form').addEventListener('submit', newFormHandler);