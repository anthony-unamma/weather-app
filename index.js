const api = {
    key: apiKey,
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keydown', setQuery);

//Get the name of the city that is searched for
function setQuery(event) {
    if (event.key == 'Enter') {
        getData(searchBox.value);
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

    let cityName = document.querySelector('.city');
    cityName.innerText = `${weather.name}, ${weather.sys.country}`
}