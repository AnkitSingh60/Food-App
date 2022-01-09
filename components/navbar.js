function navbar(){
    return ` <div id="nav">
    <div onclick="window.location.href='index.html'"> <img class="imglogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/225px-Zomato_logo.png"alt="logo"></div>
    <input oninput="type()" type="text" placeholder="Search Receipe" id="search">
    <div class="div1" onclick="window.location.href='AllRecepies.html'" id="latestReceipe">ALL RECEIPE</div>
    <div class="div1" onclick="window.location.href='RandomRecepie.html'" id="receipe">TODAYS RECEIPE</div>
    <div id="appendDiv"></div>
</div>
<div id = "words"></div>`

}

export default navbar