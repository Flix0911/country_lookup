//My variables

const url = "https://countryapi.io/api/"
const apiKey = "0M3FXa8S9y0I9nzTlvjERh9XYQIKSQn3cXY2Qh1Q"


//My functions
function requestName(countryName){

     //I need to create a variable to hold my API call
    const requestUrl = `${url}name/${countryName}/?apikey=${apiKey}`
    console.log(requestUrl) 

    fetch(requestUrl)
    .then((res) => {return res.json()})
    
    .then((data) => { 
console.log(Object.keys(data)[0])
        const country = Object.keys(data)[0]
        console.log(data[country])

        for(const key in data[country]){
            //console.log(key)
            console.log(key,data[country][key])
        }
        //Below is going to confirm spain is pulled. Commenting out, can use this as assistance
        //const es = data.es

        displayCountry(data[country]) 
        //console.log(data)// I am pulling it, comes in as an object
        
})

}

//I need to create the function displayCountry. This is
function displayCountry(country){
    const countrydiv = document.querySelector(".country")
   countrydiv.innerHTML =`
        <h3>${country.capital}</h3>
        <h3>${country.languages.name}</h3>
        <img src=${country.flag.medium}>
        `
        //`<h3>${id.es.name}</h3>` This does pull but it isn't correct. It's nested another layer deep

 }

//To initiate upon opening up

requestName("spain")









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




//Next I need to loop through to find my key 
    
        // const country = country.json(country.data);
   

        // Object.entries(res).forEach((entry) => {
        //     const [key, value] = entry
        //     console.log(`${key}: ${value}`)
        // })


        //Trying another method for...in

        // for(const key in data) {
        //     console.log(`${key}: ${data[key]}`)
        // }

        //Trying another method
        // const country = JSON.parse(data);

        // for (const key in country){
        //     if(Object.hasOwnProperty(key)){
        //         console.log(`${key} : ${res[key]}`)
        //     }
        // }