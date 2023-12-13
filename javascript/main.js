// Get all elements
const countriesForm = document.querySelector('form');
const searchInput = document.querySelector('#searchInput').value;

// Check connection and create promise
async function getAllCountriesList(searchInput) {
    const url = `https://restcountries.com/v3.1/name/${searchInput}`;

    try {
        const response = await fetch(url);
        // console.log(response);

        if (response.ok) {
            const data = await response.json();
            displayCountries(data);
        } else if (response.status === 404) {
            throw 404;
        } else {
            throw 'error';
        }
    }
    catch (error) {
        displayErrorMessage(error);
    }
}

function handleInput(choice) {
    if (choice.value === 'name') {
        // Add event listener to form
        countriesForm.addEventListener('submit', event => {
            event.preventDefault();
            const searchInput = document.querySelector('#searchInput').value;
            getAllCountriesList(searchInput);
        })
    } else if (choice.value === 'language') {
        // Add event listener to form
        countriesForm.addEventListener('submit', event => {
            event.preventDefault();
            console.log('nothing yet');
        })
    } else {
        console.log('nothing');
    }
}

// Event Listener for the form submit button
function displayCountries(countriesList){
    console.log(countriesList);

    for(const country of countriesList){
        console.log('help');
        const countryNameEl = document.createElement('h1');
        document.body.append(countryNameEl);

        const countryImageEl = document.createElement('img');
        document.body.append(countryImageEl);

        const countryName = country.name.common;
        countryNameEl.innerText = countryName;

        const countryImage = country.flags.png;
        countryImageEl.src = countryImage;
    }
}

// Display Error Message for user
function displayErrorMessage(error) {
    console.log(error);

    const errorMessage = document.createElement('h1');

    if (error === 404) {
        errorMessage.innerText = '404';
    } else {
        errorMessage.innerText = 'something went wrong';
    }
    document.body.append(errorMessage);
}