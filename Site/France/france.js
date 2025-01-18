function SetPicture(img){
    fetch("strip.json")
    .then((response) => {
        if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((json) => setfunctie(json))
    .catch((err) => console.error(`Fetch problem: ${err.message}`));

    function setfunctie(json){
        // console.log("strip/" + json[Math.floor(Math.random() * (json.length))]);
        img.src = "strip/" + json[Math.floor(Math.random() * (json.length))];
    }
}

function DestroySelf(event){
    event.stopPropagation();
    if(event.target.id == "blackscreen") event.target.remove();
}

function OnClick(event){
    let i = parseInt(event.target.id);
    console.log(i);

    fetch("description.json")
    .then((response) => {
        if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((json) => functie(json))
    .catch((err) => console.error(`Fetch problem: ${err.message}`));

    function functie(json){
        console.log(json[i]);

        blackScreen = document.createElement("div");
        document.getElementsByTagName("body")[0].appendChild(blackScreen);
        blackScreen.addEventListener("click", DestroySelf, true);
        blackScreen.setAttribute("id", "blackscreen");

        blackScreen.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
        blackScreen.style.width = "100%";
        blackScreen.style.height = window.innerHeight + "px";
        blackScreen.style.zIndex = "99999999";
        blackScreen.style.position = "fixed";
        blackScreen.style.display = "flex";
        blackScreen.style.justifyContent = "center";
        blackScreen.style.alignItems = "center";
        blackScreen.style.gap = "2em";

        image = document.createElement("img");
        blackScreen.appendChild(image);

        image.src = "favimg" + (i + 1) + ".jpg";
        image.style.width = "450px";
        image.style.height = "600px";

        text = document.createElement("div");
        blackScreen.appendChild(text);

        text.innerHTML = json[i];
        text.style.width = "450px";
        text.style.fontSize = "25px";
        text.style.color = "white";
    }
}

window.onload = function(){
    favimg = document.getElementsByClassName("favimg");
    for( let i = 0; i < favimg.length; i++ ){
        favimg[i].setAttribute("id", String(i));
        favimg[i].addEventListener("click", OnClick);
        favimg[i].style.cursor = "pointer";
    }

    // Set Strip Pictures
    setInterval(function(){SetPicture(document.getElementById("img1"))}, 5000);
    setTimeout(function(){setInterval(function(){SetPicture(document.getElementById("img2"))}, 3000)}, 2500);
}