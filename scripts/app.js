const apiUrl = "https://type.fit/api/quotes/";
let apiQuotes = [];

async function getQuotes(apiUrl) {
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} 
	catch (error) {
		alert(error)
	}
}

function newQuote() {
	const quote = apiQuotes[Math.floor((Math.random() * apiQuotes.length))];
	console.log(quote)
}

getQuotes(apiUrl);