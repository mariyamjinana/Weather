const search = async () => {
    console.log(cityName.value);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=5fe36b192ffd1c36dffb6752bc1722b2`)
    response.json().then((data) => {
        console.log(data);

        const temp = (data.main.temp - 273.15).toFixed(2);
        console.log(temp);

        const feelsLike = (data.main.feels_like - 273.15).toFixed(2);
        console.log(feelsLike);

        const name = data.name;
        console.log(name);

        const countryName = data.sys.country;
        console.log(countryName);

        const humdty = data.main.humidity;
        console.log(humdty);

        const wnd = data.wind.speed;
        console.log(wnd);

        const prsr = data.main.pressure;

        const date = new Date();
        const day = date.getDay();
        const month = date.getMonth();
        const year = date.getFullYear();
        const time = date.getHours(); // Get current hour (0 - 23)

        // Determine whether it's day or night
        const isDay = time >= 6 && time < 18; // Daytime between 6 AM and 6 PM

        // Change background image based on day or night
        const bgImageDiv = document.getElementById('bgimage');
        if (isDay) {
            // Day background image (could be a gradient for day)
            bgImageDiv.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/025/862/131/non_2x/world-ozone-day-background-international-day-for-the-preservation-concept-generative-ai-free-photo.jpeg')";
        } else {
            // Night background image (you could use a night gradient or a solid dark background)
            bgImageDiv.style.backgroundImage = "url('https://img.freepik.com/free-vector/night-forest_1308-69877.jpg?semt=ais_hybrid')"; // Example of a night theme
        }

        result.innerHTML = `
            <h4 class="text-light">${temp} <span style="font-size: small;">haze</span></h4>
            <p class="text-light">feels like ${feelsLike}</p>
            <h5 class="text-light">${name}</h5>
            <p class="text-light">${day}/${month}/${year}</p>
        `;
        country.innerHTML = `${countryName}`;
        humidity.innerHTML = `${humdty}`;
        wind.innerHTML =`${wnd}`
        pressure.innerHTML = `${prsr}`;
        parachuteImage.style.display = 'none';
        heading.style.color = 'white' ;
    });
};
