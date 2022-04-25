// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let movies_div = document.getElementById("movies")
let id;

async function searchMovies(){
    //https://www.omdbapi.com/?apikey=6a41ddca&s=om_shanti_om
    try{
        const search = document.getElementById("search").value;

        const res = await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${search}`);

        const data = await res.json();
        //  console.log("data:",data)
        const movies = data.Search
        return movies;
    }catch(err){
        console.log("err:",err)
    }
}

function appendMovies(data){
    movies_div.innerHTML = null;
    data.forEach(function(el) {
        let div = document.createElement("div")
        div.setAttribute("class","poster")
       let p = document.createElement("h2")
       p.innerText = el.Title;
       let poster = document.createElement("img")
       poster.src = el.Poster;
        let btn = document.createElement("button");
        btn.innerText = "Book Now"
       div.append(poster,p,btn)
       movies_div.append(div)
    });

}
async function main(){
    let data = await searchMovies();
    if(data === undefined){
        return false
    } 
    appendMovies(data);
}

// debouncing
function debounce (func,delay){
    if(id){
        clearTimeout(id);
    }
   id = setTimeout(function(){
        func();
    },delay)
}
var amountData = JSON.parse(localStorage.getItem("amount"));
amountData.map(function(ele){
    let h1 = document.createElement("h1");
    h1.innerText = ele.amount;

    navbar.append(h1);
})