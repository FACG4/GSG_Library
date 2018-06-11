function select(selector) {
	return document.querySelector(selector);
}

const email = select('.email');
const pass = select('.pass');
const msg = select('.msg');
const msg2 = select('.msg2');

function validateForm() {
	if (email.value === '' || pass.value === '') {
		msg.textContent = 'Email and password must be filled out';
	}

	if (!email.checkValidity()) {
		msg2.textContent = email.validationMessage;
	}
}

const inputMobile = select('.mobile');

if (inputMobile) {
	inputMobile.addEventListener('blur', () => {
		const book = select('.book').value;
		const mobile = select('.mobile').value;
		const dataa = { book, mobile };


		send('/reserv', dataa, (res) => {
			if (res.book === 'not found') {
				document.querySelector('.wrong').style.display = 'inline';
			} else {
				document.querySelector('.correct').style.display = 'inline';
			}
			if (res.member === 'not found') {
				document.querySelector('.wrong1').style.display = 'inline';
			} else {
				document.querySelector('.correct1').style.display = 'inline';
			}

			const name = document.querySelector('.name');
			const email = document.querySelector('.email');
			if (res.data1) {
				name.value = res.data1.full_name;
				email.value = res.data1.email;
			}
		});
	});
}

const lendButton = select('.lend');
if (lendButton) {
	lendButton.addEventListener('click', () => {
		const book = select('.book').value;


		const mobile = select('.mobile').value;
		const fullName = select('.name').value;
		const email = select('.email').value;
		const startDate = select('.startDate').value;
		const endDate = select('.endDate').value;

		const info = {
			mobile, fullName, email, book, startDate, endDate,
		};
		send('/reserv', info, () => {

		});
	});
}
// note^_^
// i think must be improve dom 

