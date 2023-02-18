const onlineServer = 'https://jsonplaceholder.typicode.com/users';
const localServer = 'http://localhost:8000/data';

fetch(onlineServer)
	.then((res) => {
		if (res.ok) {
			console.log('Success');
		} else {
			console.log('Not Successful');
		}
		return res.json();
	})
	.then((data) => {
		data.forEach((item) => {
			const markup = `<li class="list">
				<p class="name"> ${item.name} - 
                <span>${item.email} </span> </p>
                <div class="message"> 
                ${item.address.street} 
                ${item.address.city} `;
			document
				.querySelector('#data')
				.insertAdjacentHTML('beforeend', markup);
		});
	})
	.catch((error) => {
		const markupError = `<span class="error-message"> Server Connection Error!`;
		document
			.querySelector('#data')
			.insertAdjacentHTML('beforeend', markupError);
	});
