// Create a promise
async function getAllCountriesList(path) {
    const url = `https://restcountries.com/v3.1/${path}`;

    try {
        const response = await fetch(url);
        // console.log(response);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            showName(data[0].name.common);
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
// getAllCountriesList("all");

// Get the form Element
const countriesForm = document.querySelector('form');

const searchInput = document.querySelector('#searchInput').value;
const countryNameChoice = document.querySelector('#countryNameChoice').value;
const languageChoice = document.querySelector('#languageChoice').value;

function handleInput(choice) {
    console.log(choice);
    if (choice.value === countryNameChoice) {
        console.log('country name');
        test(countryNameChoice);
    } else if (choice.value === languageChoice) {
        console.log('language');
        test(languageChoice);
    } else {
        console.log('nothing');
    }
}



// Add event listener to form
countriesForm.addEventListener('submit', event => {
    event.preventDefault();
    function test(choice) {
        if (choice === countryNameChoice) {
            findInfo(searchInput);
        } else if (choice === languageChoice) {

        } else {
            displayErrorMessage();
        }
    }
    test();
})

// Sends new request for new async promise
function findInfo(countryName) {
    getAllCountriesList(`name/${countryName}?fields=name`);
}

// Creates h1 and shows the country name
function showName(countryName) {

    const countryNameElement = document.createElement('h1');
    document.body.append(countryNameElement);
    countryNameElement.innerText = countryName;
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