window.onclick = function (e) {
    let popup = document.getElementsByClassName("popup");
    for (let id = 0; id < popup.length; ++id) {
        console.log(popup[id]);
        if (e.target == popup[id]) {
            popup[id].style.display = "none";
        }
    }
}

function ModalWindow(id) {
    let popup = document.getElementById(`modal${id}`);
    popup.style.display = "block";
}

