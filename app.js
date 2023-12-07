//My variables

const url = "https://countryapi.io/api/"
const apiKey = "0M3FXa8S9y0I9nzTlvjERh9XYQIKSQn3cXY2Qh1Q"


//My functions
function requestName(countryName){

     //I need to create a variable to hold my API call
    const requestUrl = `${url}name/${countryName}/?apikey=${apiKey}`
    //console.log(requestUrl) 

    fetch(requestUrl)
    .then((res) => {return res.json()})
    
    .then((data) => { 
        //Need to go a level deeper for displaying. Country name is not the top of the object
        //console.log(Object.keys(data)[0])
        const country = Object.keys(data)[0]
        //console.log(data[country])

        for(const key in data[country]){
            //console.log(key)
            //console.log(key,data[country][key])
        }
        //Below is going to confirm spain is pulled. Commenting out, can use this as assistance
        //const es = data.es

        displayCountry(data[country]) 
        //console.log(data)// I am pulling it, comes in as an object
        
})

}

//below function is to render the country onto the DOM
function displayCountry(country){
    const countrydiv = document.querySelector(".country")
   countrydiv.innerHTML =`
        <h3>Capital: ${country.capital}</h3>
        <h3>Region: ${country.region}</h3>
        <h3>Population: ${country.population}</h3>
        <img src=${country.flag.medium}>
        `
        //`<h3>${id.es.name}</h3>` This does pull but it isn't correct. It's nested another layer deep

 }

 //function to allow you to submit
 //name the function of what it will be doing

 //It is an event function
 //function handleSubmit(event){

    //prevent the refreshing of the page
    event.preventDefault()

    //grab the form from the event
    const form = event.target
    //console.log(form) //quickly appears and quickly disappears
    //checked after adding preventDefault, I am logging the form

    //create a formData to access - creating a wrapper
    const formData = new FormData(form)
    //grab the CountryName
    const countryName = formData.get("CountryName")
    //console.log(countryName)

    //fetch specified
    requestName(countryName)
 }

//To initiate upon opening up

//add the handleSubmit function
document.querySelector("form").addEventListener("submit", handleSubmit)

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

//8:30 am MST / Dec 2
//The problem of the day was figuring out how to get past the top layer of the object. This is a ISO country code that holds the rest of the object

//1:00 pm MST / Dec 2
//David helped me understand what I was doing wrong. I tried 3 different methods, for...loop, for...in, and object.key, but I didn't utilize any of them in their entirity. I had the basis (though it was wrong) of using object.keys but I didn't combine it with a loop. The opposite is true too, I started looping, but I was looping through anything with substance

//1:40 MST / Dec 2
//Fixed up my function of displayCountry() and it is now passing in the data I am wanting to show. Would like to maybe add 1 more but concerned how I'll start styling this. 

//Goal for / Dec 3 (writing as of Dec 2)
//Think on if I want to add more information. Tomorrow, will reevaluate where I am and go from there. I need to create a function for the button now that will handle the input from the user.

//6:00 pm MST / Dec 3
//Completed goal of the function for the button. Did not work on what information will be displayed yet. Added data.txt and had spain as my reference so I don't need it in the browser

//Goal for Dec 4(writing as for Dec 3) 
//Finish what information will pull. From there, start looking at how style is going to be handled.

//Skipped Dec 4th for homework

//4:40 pm MST / Dec 5
//Comeplted pulling all the information I want to report on. Capital, Language, Region, and Flag.
//Commented out the console.logs that were still left active. No longer need them but will leave them there for thoroughness
//Began styling in CSS. More like, I laid out what I will be looking to style. Need to sketch out what I think the colors should look like, and how the data should appear on the page
//Another comment, need to add a footer with something on it for the sake of styling


//Testing

// $.ajax("https://countryapi.io/api/all?apikey=WbnHhi8gYqWon6MUXgJ8MIcR0VjTErzDGynULxjh&t")
// .then((data) => {
//     console.log(data)
//     console.log(data.value.name.peru)
// })




