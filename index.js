const api = {
    key: "022da4ce666be16f918fc81dc5e14ba3",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keydown', setQuery);

//Get the name of the city that is searched for
function setQuery(event) {
    if (event.key == 'Enter') {
        getData(searchBox.value);
        console.log(searchBox.value);
    }
}

function getData(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather);
}