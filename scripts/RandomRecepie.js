let url = 'https://www.themealdb.com/api/json/v1/1/random.php';
let mainDiv = document.getElementById("mainDiv")


async function getAllRecepie(){
    let res = await fetch(url);
    let data = await res.json();
    let allRecepie = data.meals[0];
    display(allRecepie)
    
    console.log('allRecepie:', allRecepie)
}

function display(list){

    let div = document.createElement("div");
            div.setAttribute("class", "randomBox");

            let img = document.createElement("img")
            img.setAttribute("class", "randomImg")
            img.src = list.strMealThumb;

            let name = document.createElement("h3");
            name.setAttribute("class", "randomName")
            name.innerText = list.strMeal;

            let id = document.createElement("p")
            id.setAttribute("class", "randomId")
            id.innerText = `Id: ${list.idMeal}`;

            let price = document.createElement("p");
            price.setAttribute("class", "randomPrice")
            price.innerText = `Price: ${Math.floor(Math.random()*501)}`;

            let Des = document.createElement("p")
            Des.setAttribute("class", "randomDes")
            Des.innerText = `Instructions: ${list. strInstructions}`;

            

            div.append(img,name,id,price,Des);
            mainDiv.append(div)

}


getAllRecepie()

