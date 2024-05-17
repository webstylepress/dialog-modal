const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-close');
const dialog = document.querySelector('dialog');

btn1.addEventListener('click', () => {
	// dialog.show();
	dialog.showModal();
	dialog.classList.add('opened');
});

btn2.addEventListener('click', () => {
	dialog.close();
	dialog.classList.remove('opened');
});

btn4.addEventListener('click', () => {
	dialog.close();
	dialog.classList.remove('opened');
});

btn3.addEventListener('click', () => {
	if (dialog.open) {
		dialog.close();
		dialog.classList.remove('opened');
	} else {
		// dialog.show();
		dialog.showModal();
		dialog.classList.add('opened');
	}
});
