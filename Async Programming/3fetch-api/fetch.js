// //1.select the target element
// let btn=document.getElementById("btn");
// let data = document.getElementById("data");

// //set a url getting the data
// const url="https://www.breakingbadapi.com/api/quote/random";

//  //Add an event Listener to the button
//  btn.addEventListener("click",async function(){
// data.innerHTML="Loading.....";

// try{
// //Write the logic to fetch the data from the url
// let result=await fetch(url);
// let obj=await result.json();
// //console.log(result);
// data.innerHTML=`
// <h1>${obj[0].author}</h1>
// <p>${obj[0].quote}</p>
// <h2>${obj[0].series}</h2>
// `

// } catch(error){
//  console.log(error);
// }
// });

// //2.select the target element with fetchdata and result id
// const fetchDatabtn=document.querySelector('#fetchdata');
// const result=document.querySelector('#result');

// //Get the data for the api and set the content of the result div accordingly
// async function getData(){

//     result.innerHTML="Loading.....";
//     try{
//         const res=await fetch("https://api.github.com/users/lavishjain36");
//         const data=await res.json();
//         result.innerHTML=`
//     <div class="card">
//     <div class="card-body">
//     <h5 class="card-title">${data.name}</h5>
//     <h6 class="card-subtitle mb-2 text-muted">${data.bio}</h6>
//     <p class="card-text">${data.location}</p>
//     <a href="${data.html_url}" class="card-link">Github Profile</a>
//     <a href="${data.blog}" class="card-link">Blog</a>
//     <h1>${data.followers}</h1>
//     <h1>${data.following}</h1>
//     </div>
//     `
//     }catch(error){
//     result.innerHTML=error;
//     }
// }
// fetchDatabtn.addEventListener('click',getData);

//3.create and built a header layout

document.body.innerHTML = `
<div class="heading-container">
<h1>Brewery List</h1>
<img class="icon" src="brewery.jpg">
</div>
<div id="mainContainer" class="main-container"></div>`;

const getData = async () => {
  try {
    const data = await fetch("https://api.openbrewerydb.org/breweries/");
    const breweries = await data.json();
    console.log(breweries);
    mainContainer.innerHTML = "";
    breweries.forEach((brewery) => {
      displayData(brewery);
    });
  } catch (error) {
    console.log(error);
  }
}
getData();

const displayData = () => {
  mainContainer.innerHTML += `
<div class="container">
<h3>class="Breid">Breweries ID<span>${obj.id}</span></h3>
<h3 class="common">Breweries Name:<span>${obj.city}</span></h3>
<h3 class="common">Breweries Country:<span>${obj.country}</span></h3>
<h3 class="common">Breweries State:<span>${obj.state}</span></h3>
<h3 class="common">Breweries Postal_code:<span>${obj.postal_code}</span></h3>
<h3 class="common">Breweries Website:<span>${obj.website_url}</span></h3>
</div>`;
}
