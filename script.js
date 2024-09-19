document
	.getElementById('scrollBtn')
	.addEventListener('click', function (event) {
		event.preventDefault();

		const content = document.getElementById('content');
		content.scrollIntoView({ behavior: 'smooth' });
	});
