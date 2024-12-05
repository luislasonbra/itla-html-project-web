window.onload = () => {
	document.getElementById('menuToggle').addEventListener('click', function() {
		const menu = document.getElementById('menu');
		menu.classList.toggle('active');
	});
};