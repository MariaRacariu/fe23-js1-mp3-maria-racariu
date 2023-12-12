// Create a promise
async function getAllCountriesList() {
    const url = "https://restcountries.com/v3.1/all";
    const response = await fetch(url);
    console.log(response);

    if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data.message;
    } else if (response.status === 404) {
        throw 404;
    }
}
getAllCountriesList();

// Get the form Element
const countriesForm = document.querySelector('form');

// Add event listener to form
countriesForm.addEventListener('submit', event => {
    event.preventDefault();

    // Get inputs and the users input value
    const searchInput = document.querySelector('#searchInput').value;
    const countryNameChoice = document.querySelector('#countryNameChoice').value;
    const languageChoice = document.querySelector('#languageChoice').value;
})