const dataAddress = "https://type.fit/api/quotes/";

let data = [];

async function getData(dataAddress) {
	try {
		const response = await fetch(dataAddress);
		data = await response.json();
		getRandomObject(data.length);
	} 
	catch (error) {
		console.error(error);
	}
}

function getRandomObject(dataObjectsQty) {
	const object = data[Math.floor((Math.random() * dataObjectsQty))];
	console.log(object);
}

getData(dataAddress);