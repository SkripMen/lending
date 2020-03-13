let popup1 = document.getElementById("modal1"),
    popup2 = document.getElementById("modal2"),
    popup3 = document.getElementById("modal3"),
    popup4 = document.getElementById("modal4"),
    popup5 = document.getElementById("modal5"),
    popup6 = document.getElementById("modal6"),
    but1 = document.getElementById("mod1"),
    but2 = document.getElementById("mod2"),
    but3 = document.getElementById("mod3"),
    but4 = document.getElementById("mod4"),
    but5 = document.getElementById("mod5"),
    but6 = document.getElementById("mod6");

but1.onclick = function () {
    popup1.style.display = "block";
};
but2.onclick = function () {
    popup2.style.display = "block";
};
but3.onclick = function () {
    popup3.style.display = "block";
};
but4.onclick = function () {
    popup4.style.display = "block";
};
but5.onclick = function () {
    popup5.style.display = "block";
};
but6.onclick = function () {
    popup6.style.display = "block";
};

window.onclick = function (e) {
    if (e.target == popup1){
        popup1.style.display = "none";
    }
    else if(e.target == popup2){
        popup2.style.display = "none";
    }
    else if(e.target == popup3){
        popup3.style.display = "none";
    }
    else if(e.target == popup4){
        popup4.style.display = "none";
    }
    else if(e.target == popup5){
        popup5.style.display = "none";
    }
    else if(e.target == popup6){
        popup6.style.display = "none";
    }
};