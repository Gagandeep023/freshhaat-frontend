async function postFormDataAsJson({ url, formData }) {
	const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);

	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: formDataJsonString,
	};

	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}

	return response.json();
}

async function handleFormSubmit(event) {
	event.preventDefault();

	const form = event.currentTarget;
	const url = 'http://localhost:3001/api/v1/dashboard/details';

	try {
		const formData = new FormData(form);
		const responseData = await postFormDataAsJson({ url, formData });
		console.log({ responseData });
		window.location.href= "http://127.0.0.1:5500/success.html";  


	} catch (error) {
		console.error(error);
		location.assign("http://127.0.0.1:5500/pageNotFound.html");
	}
}

const productForm = document.getElementById("product-form");
productForm.addEventListener("submit", handleFormSubmit);
