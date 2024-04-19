const options = {    
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com' 
    }   
};

// Search main Cards
const getWeather = (city)=>{
    cityName.innerHTML=city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct.innerHTML=response.cloud_pct
            feels_like.innerHTML=response.feels_like
            humidity.innerHTML=response.humidity
            max_temp.innerHTML=response.max_temp
            min_temp.innerHTML=response.min_temp
            sunrise.innerHTML=response.sunrise
            sunset.innerHTML=response.sunset
            temp.innerHTML=response.temp
            wind_degrees.innerHTML=response.wind_degrees
            wind_speed.innerHTML=response.wind_speed
            humidity2.innerHTML=response.humidity
            temp2.innerHTML=response.temp
            wind_speed2.innerHTML=response.wind_speed

// Muzaffarpur
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Muzaffarpur', options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct_3.innerHTML=response.cloud_pct
            feels_like_3.innerHTML=response.feels_like
            humidity_3.innerHTML=response.humidity
            max_temp_3.innerHTML=response.max_temp
            min_temp_3.innerHTML=response.min_temp
            sunrise_3.innerHTML=response.sunrise
            sunset_3.innerHTML=response.sunset
            temp_3.innerHTML=response.temp
            wind_degrees_3.innerHTML=response.wind_degrees
            wind_speed_3.innerHTML=response.wind_speed
        })
// Lucknow
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct_4.innerHTML=response.cloud_pct
            feels_like_4.innerHTML=response.feels_like
            humidity_4.innerHTML=response.humidity
            max_temp_4.innerHTML=response.max_temp
            min_temp_4.innerHTML=response.min_temp
            sunrise_4.innerHTML=response.sunrise
            sunset_4.innerHTML=response.sunset
            temp_4.innerHTML=response.temp
            wind_degrees_4.innerHTML=response.wind_degrees
            wind_speed_4.innerHTML=response.wind_speed
        })
// Mumbai
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct_5.innerHTML=response.cloud_pct
            feels_like_5.innerHTML=response.feels_like
            humidity_5.innerHTML=response.humidity
            max_temp_5.innerHTML=response.max_temp
            min_temp_5.innerHTML=response.min_temp
            sunrise_5.innerHTML=response.sunrise
            sunset_5.innerHTML=response.sunset
            temp_5.innerHTML=response.temp
            wind_degrees_5.innerHTML=response.wind_degrees
            wind_speed_5.innerHTML=response.wind_speed
        })
// Bangalore
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct_6.innerHTML=response.cloud_pct
            feels_like_6.innerHTML=response.feels_like
            humidity_6.innerHTML=response.humidity
            max_temp_6.innerHTML=response.max_temp
            min_temp_6.innerHTML=response.min_temp
            sunrise_6.innerHTML=response.sunrise
            sunset_6.innerHTML=response.sunset
            temp_6.innerHTML=response.temp
            wind_degrees_6.innerHTML=response.wind_degrees
            wind_speed_6.innerHTML=response.wind_speed
        })

// Channi
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Channi', options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct_7.innerHTML=response.cloud_pct
            feels_like_7.innerHTML=response.feels_like
            humidity_7.innerHTML=response.humidity
            max_temp_7.innerHTML=response.max_temp
            min_temp_7.innerHTML=response.min_temp
            sunrise_7.innerHTML=response.sunrise
            sunset_7.innerHTML=response.sunset
            temp_7.innerHTML=response.temp
            wind_degrees_7.innerHTML=response.wind_degrees
            wind_speed_7.innerHTML=response.wind_speed
        })

// Dehradun
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dehradun', options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct_8.innerHTML=response.cloud_pct
            feels_like_8.innerHTML=response.feels_like
            humidity_8.innerHTML=response.humidity
            max_temp_8.innerHTML=response.max_temp
            min_temp_8.innerHTML=response.min_temp
            sunrise_8.innerHTML=response.sunrise
            sunset_8.innerHTML=response.sunset
            temp_8.innerHTML=response.temp
            wind_degrees_8.innerHTML=response.wind_degrees
            wind_speed_8.innerHTML=response.wind_speed
        })

// Kolkata
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct_9.innerHTML=response.cloud_pct
            feels_like_9.innerHTML=response.feels_like
            humidity_9.innerHTML=response.humidity
            max_temp_9.innerHTML=response.max_temp
            min_temp_9.innerHTML=response.min_temp
            sunrise_9.innerHTML=response.sunrise
            sunset_9.innerHTML=response.sunset
            temp_9.innerHTML=response.temp
            wind_degrees_9.innerHTML=response.wind_degrees
            wind_speed_9.innerHTML=response.wind_speed
        })

// Hyderabad
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=hyderabad', options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct_10.innerHTML=response.cloud_pct
            feels_like_10.innerHTML=response.feels_like
            humidity_10.innerHTML=response.humidity
            max_temp_10.innerHTML=response.max_temp
            min_temp_10.innerHTML=response.min_temp
            sunrise_10.innerHTML=response.sunrise
            sunset_10.innerHTML=response.sunset
            temp_10.innerHTML=response.temp
            wind_degrees_10.innerHTML=response.wind_degrees
            wind_speed_10.innerHTML=response.wind_speed
        })

// Dubai
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai', options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct_11.innerHTML=response.cloud_pct
            feels_like_11.innerHTML=response.feels_like
            humidity_11.innerHTML=response.humidity
            max_temp_11.innerHTML=response.max_temp
            min_temp_11.innerHTML=response.min_temp
            sunrise_11.innerHTML=response.sunrise
            sunset_11.innerHTML=response.sunset
            temp_11.innerHTML=response.temp
            wind_degrees_11.innerHTML=response.wind_degrees
            wind_speed_11.innerHTML=response.wind_speed
        })

// New York City
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York City', options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct_12.innerHTML=response.cloud_pct
            feels_like_12.innerHTML=response.feels_like
            humidity_12.innerHTML=response.humidity
            max_temp_12.innerHTML=response.max_temp
            min_temp_12.innerHTML=response.min_temp
            sunrise_12.innerHTML=response.sunrise
            sunset_12.innerHTML=response.sunset
            temp_12.innerHTML=response.temp
            wind_degrees_12.innerHTML=response.wind_degrees
            wind_speed_12.innerHTML=response.wind_speed
        })

// Saudi Arabia
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=saudi arabia', options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct_13.innerHTML=response.cloud_pct
            feels_like_13.innerHTML=response.feels_like
            humidity_13.innerHTML=response.humidity
            max_temp_13.innerHTML=response.max_temp
            min_temp_13.innerHTML=response.min_temp
            sunrise_13.innerHTML=response.sunrise
            sunset_13.innerHTML=response.sunset
            temp_13.innerHTML=response.temp
            wind_degrees_13.innerHTML=response.wind_degrees
            wind_speed_13.innerHTML=response.wind_speed
        })

        // Surat

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Surat', options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct_14.innerHTML=response.cloud_pct
            feels_like_14.innerHTML=response.feels_like
            humidity_14.innerHTML=response.humidity
            max_temp_14.innerHTML=response.max_temp
            min_temp_14.innerHTML=response.min_temp
            sunrise_14.innerHTML=response.sunrise
            sunset_14.innerHTML=response.sunset
            temp_14.innerHTML=response.temp
            wind_degrees_14.innerHTML=response.wind_degrees
            wind_speed_14.innerHTML=response.wind_speed
        })

        // Patna
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Patna', options)
        .then(response => response.json())
        .then((response) => {
            cloud_pct_15.innerHTML=response.cloud_pct
            feels_like_15.innerHTML=response.feels_like
            humidity_15.innerHTML=response.humidity
            max_temp_15.innerHTML=response.max_temp
            min_temp_15.innerHTML=response.min_temp
            sunrise_15.innerHTML=response.sunrise
            sunset_15.innerHTML=response.sunset
            temp_15.innerHTML=response.temp
            wind_degrees_15.innerHTML=response.wind_degrees
            wind_speed_15.innerHTML=response.wind_speed
        })
        
    })
    .catch(err=> console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

