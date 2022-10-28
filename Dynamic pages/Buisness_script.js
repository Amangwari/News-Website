let container = document.querySelector(".container")
const api = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f483c3904c9046f093840880bebf5868";
// console.log(api);
let news = document.querySelector(".container")
let data;
let response;
async function apiFun(){
         data =  await fetch(api)
         response = await data.json()
         return response
        // console.log(response) 
}

// apiFun()

async function dataFun(){
    let test = await apiFun()
    let dataArticles = test.articles
    console.log(dataArticles);
    dataArticles.forEach(element => {
        let newsDiv = document.createElement("div")
        newsDiv.setAttribute("class", "news")
        newsDiv.innerHTML = `
        <div class="newsCon">
        <img src="${element.urlToImage }" alt="this">
        <h5>  ${element.title} </h5>
        <p> ${element.content}</p>
        <a class= "btn2" href="${element.url}"target="_blank">Read more</a>
        </div>  `
        
        container.appendChild(newsDiv)
    });
}
dataFun()