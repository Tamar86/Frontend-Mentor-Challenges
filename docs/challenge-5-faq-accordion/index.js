const minusButton = './assets/images/icon-minus.svg';
const plusButton = './assets/images/icon-plus.svg';

const buttons = document.querySelectorAll('.main__button');
const answers = document.querySelectorAll('.main__answer');

buttons.forEach((button, index) => {
	const buttonImg = button.querySelector('img');
	const answer = answers[index];
	button.addEventListener('click', function () {
		if (buttonImg.src.includes('icon-plus.svg')) {
			buttonImg.src = minusButton;
			answer.classList.add('main__answer--displayed');
			answer.classList.remove('main__answer--hidden');
		} else {
			buttonImg.src = plusButton;
			answer.classList.add('main__answer--hidden');
			answer.classList.remove('main__answer--displayed');
		}
	});
});
