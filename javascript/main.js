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




function handleInput(choice) {
    // console.log(choice);
    if (choice.value === 'name') {
        // console.log('country name');
        // Add event listener to form
        countriesForm.addEventListener('submit', event => {
            event.preventDefault();
            const searchInput = document.querySelector('#searchInput').value;
            findInfo(searchInput);
        })
    } else if (choice.value === 'language') {
        // console.log('language');
        // Add event listener to form
        countriesForm.addEventListener('submit', event => {
            event.preventDefault();
            console.log('nothing yet');
        })
    } else {
        console.log('nothing');
    }
}
const countryNameElement = document.createElement('h1');
document.body.append(countryNameElement);

// Sends new request for new async promise
function findInfo(countryName) {
    // Get Flag
    // getAllCountriesList(`name/${countryName}?field=flags.png`);
    // Get Name
    getAllCountriesList(`name/${countryName}?fields=name`);

}



// Creates h1 and shows the country name
function showName(countryName) {
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