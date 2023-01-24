/*
	formNode.elements  -  элемнты формы HTMLFormControlsCollection
	чекбокс проверяем на element.checked


	FormData()
	const data = new FormData(document.forms[0])
	просмотреть что внутри : console.log(Array.from(data.entries())) или циклом пройти
	чекбокс при formData - либо есть в ответе, либо нет
*/

//1
function serializeForm(formNode) {
	const {elements} = formNode;
	Array.from(elements)
		.forEach((element) => {
			const {name, value} = element;
			console.log({name, value})
		})
}

//2
function serializeForm2(formNode) {
	return new FormData(formNode)
}


function handleFormSubmit(event) {
	event.preventDefault();
	const data = serializeForm2(applicantForm);
	//const response = await sendData(data) - отправляем данные
}


const applicantForm = document.getElementById('mars-once');
applicantForm.addEventListener('submit', handleFormSubmit);

