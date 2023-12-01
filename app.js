//My variables

const url = "https://countryapi.io/api/"
const apiKey = "WbnHhi8gYqWon6MUXgJ8MIcR0VjTErzDGynULxjh"


//My functions
function requestCountry(countryName){

     //I need to create a variable to hold my API call
    const requestUrl = `${url}name/${countryName}/?apikey=${apiKey}`
    console.log(requestUrl) 

    fetch(requestUrl)
    .then((res) => {return res.json()})
    .then((data) => {
        displayCountry(data)
        console.log(data)// I am pulling it, comes in as an object
})

}

//I need to create the function displayCountry. This is
function displayCountry(country){
    const countrydiv = document.querySelector(".country")

    countrydiv.innerHTML =
        `<h3>${country.es.capital}</h3>`
}

//To initiate upon opening up

//requestCountry("spain")





//From their website, kept at the bottom for now
// var settings = {
//     "url": "https://countryapi.io/api/all",
//     "method": "GET",
//     "timeout": 0,
//     "headers": {
//       "Authorization": "Bearer YOUR-APIKEY"
//     },
//   };
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });



//Calls that didn't work

//const requestUrl = `${url}api/name/${countryName}/all?apikey=${apiKey}`
//https://countryapi.io/api/name/Peru/all?apikey=WbnHhi8gYqWon6MUXgJ8MIcR0VjTErzDGynULxjh 

//const requestUrl = `${url}api/all?apikey=${apiKey}/name=${countryName}`
//https://countryapi.io/api/all?apikey=WbnHhi8gYqWon6MUXgJ8MIcR0VjTErzDGynULxjh/name=pe

// -----This called but not peru specifically
//    const requestUrl = `${url}api/all?apikey=${apiKey}&name=${countryName}`
//https://countryapi.io/api/all?apikey=WbnHhi8gYqWon6MUXgJ8MIcR0VjTErzDGynULxjh&name=pe


//const requestUrl = `GET ${url}api/all?apikey=${apiKey}&%name=${countryName}`


//${url}name/${countryName}/?apikey=${apiKey}
//This one worked. Asked for help online. Below is the why
//Everything after the ? is usually considered a URL paramater
//With that, I needed https://countryapi.io/api/name/${country}?apikey=${apiKey}
//my parameter is the name/x

//3:30 pm MST / Dec 1
//My current problem is, I want the information to display, but I have to type country."country code".name - to get it to display. I need to figure out how to get past the country code, or once name is submitted, it moves through it



//Testing

// $.ajax("https://countryapi.io/api/all?apikey=WbnHhi8gYqWon6MUXgJ8MIcR0VjTErzDGynULxjh&t")
// .then((data) => {
//     console.log(data)
//     console.log(data.value.name.peru)
// })
