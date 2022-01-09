let url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
let mainDiv = document.getElementById("mainDiv")


async function getAllRecepie(){
    let res = await fetch(url);
    let data = await res.json();
    let allRecepie = data.categories
    display(allRecepie)
    console.log('allRecepie:', allRecepie)
}

function display(arr){
arr.forEach(function(list){
    let div = document.createElement("div");
            div.setAttribute("class", "box");

            let img = document.createElement("img")
            img.setAttribute("class", "imgbox")
            img.src = list.strCategoryThumb;

            let name = document.createElement("h3");
            name.innerText = list.strCategory;

            let id = document.createElement("p")
            id.innerText = `Id: ${list.idCategory}`;

            let price = document.createElement("p");
            price.innerText = `Price: ${Math.floor(Math.random()*501)}`;

            div.append(img,name,id,price);
            mainDiv.append(div)
})
}


getAllRecepie()

