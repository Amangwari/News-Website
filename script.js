// // apis 

// const API_KEY = "f483c3904c9046f093840880bebf5868";
// const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f483c3904c9046f093840880bebf5868";
// const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=f483c3904c9046f093840880bebf5868";
// const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f483c3904c9046f093840880bebf5868";
// const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=f483c3904c9046f093840880bebf5868";
// const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=f483c3904c9046f093840880bebf5868";
// const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=f483c3904c9046f093840880bebf5868";
// const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";



let container = document.querySelector(".container")
const api = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f483c3904c9046f093840880bebf5868";
// console.log(api);
let news = document.querySelector(".container")
let data;
let response;
async function apiFun() {
    data = await fetch(api)
    response = await data.json()
    return response
    // console.log(response) 
}

// apiFun()

async function dataFun() {
    let test = await apiFun()
    let dataArticles = test.articles
    console.log(dataArticles);
    dataArticles.forEach(element => {

        let newsDiv = document.createElement("div")
        newsDiv.setAttribute("class", "news")
        newsDiv.innerHTML = `
        <div class="newsCon">
        <img src="${element.urlToImage}" alt="this">

        <div class="innerNewsCon">
        <h5>  ${element.title} </h5>
        <p class="long-text"> ${element.content}</p>
        </div>

        <a class= "btn2" href="${element.url}"target="_blank">Read more</a>
        </div>  `


        container.appendChild(newsDiv)
    });

}
dataFun()






// code for image empty
// const img = document.getElementsByTagName('img');

// const src = img.getAttribute('src');
// if (!src) {
//     console.log('img src is empty');
// } else {
//     `src="${element.urlToImage}`
// }