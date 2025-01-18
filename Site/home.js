function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailPattern.test(email); 
}

function register(event){
    email = document.getElementById("user_email");
    newsletter = email.parentNode.parentNode;
    if(validateEmail(email.value)){
        document.getElementById("newsletter").remove();
        message = document.createElement("div");
        newsletter.appendChild(message);

        text = "Thanks for subscribing, <br>" + email.value + "!";

        message.innerHTML = text;
        message.style.fontSize = "1.2em";

        localStorage.setItem("logged", true);
        localStorage.setItem("email", email.value);
    }
    else{
        console.log("invalid email");
    }
}

window.onload = function() {
    var decorNR = 9;
    var widthSize = 75;
    var widthSizeMin = 25;

    rows = document.getElementsByClassName("design_elements");
    for( let i = 0; i < rows.length; i++ ){
        console.log(i);
        rows[i].style.display = "flex";
        rows[i].style.justifyContent = "space-between";
        rows[i].style.alignItems = "center";
        rows[i].style.gap = "1em";
        for( let j=0; j<=decorNR; j++ ){
            element = document.createElement("img");
            rows[i].appendChild(element);
            element.style.zIndex = "26";
            element.style.width = ( (j / decorNR) * (widthSize - widthSizeMin) + widthSizeMin ) + "px";
            element.style.height = ( (j / decorNR) * (widthSize - widthSizeMin) + widthSizeMin ) / 2 + "px";
            element.src = "design_left.png";
            element.alt = "no image";
        }
        for( let j=0; j<=decorNR; j++ ){
            element = document.createElement("img");
            rows[i].appendChild(element);
            element.style.zIndex = "26";
            element.style.width = ( ((decorNR - j) / decorNR) * (widthSize - widthSizeMin) + widthSizeMin ) + "px";
            element.style.height = ( ((decorNR - j) / decorNR) * (widthSize - widthSizeMin) + widthSizeMin ) / 2 + "px";
            element.src = "design_right.png";
            element.alt = "no image";
        }
    }

    // Formular
    if( !localStorage.getItem("logged") ){
        button = document.getElementById("submit");
        button.addEventListener("click", register);
    }
    else{
        newsletter = document.getElementById("user_email").parentNode.parentNode;
        document.getElementById("newsletter").remove();
        message = document.createElement("div");
        newsletter.appendChild(message);

        text = "Thanks for subscribing, <br>" + localStorage.getItem("email") + "!";

        message.innerHTML = text;
        message.style.fontSize = "1.2em";
    }
}