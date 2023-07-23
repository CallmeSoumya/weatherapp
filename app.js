// // const API_KEY= `12de811f74e38318fd56545398a8f09c`
// // const form=document.querySelector("form")
// // const weather=document.querySelector("#weather")
// // const search=document.querySelector("#search")
// // // const API=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric`
// // // const IMG_URL=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
//     // weather.innerHTML = `<h2> Loading... <h2>`
//     // const data = await response.json()
//     // return showWeather(data)

// // const getweather = async(city) => {
// //     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// //     const response= await fetch(url)
// //     console.log(response);
// // }

// const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const form = document.querySelector("form")
// const search = document.querySelector("#search")
// const weather = document.querySelector("#weather")
//     // const API = `https://api.openweathermap.org/data/2.5/weather?
//     // q=${city}&appid=${API_KEY}&units=metric`
//     // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


//     //as we are fetching url so it is asynchronous
// const getWeather = async(city) => {
//     weather.innerHTML=`<h2> Loading...</h2> `
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//     // if we do not await it then next  line will be executed before fetching

//     const response = await fetch(url);
//     const data=await response.json();
//     return showWeather(data);
// }
// const showWeather =(data) =>{
//     if(data.cod =="404"){
//         weather.innerHTML=`<h2> City Not Found </h2>`
//         return;
//     }
// weather.innerHTML=`
// <div>
// <img src="https: //openweathermap.org/img/wn/04n@2x.png" alt="">

// </div>
// <div>
// <h2>${data.main.temp}℃</h2>
// <h4>${data.weather[0].main}</h4>
// </div>


// `
// }
// form.addEventListener(
//     "submit",
//     function(event) {
//         getWeather(search.value);
//         event.preventDefault();
//     }
// )




const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)