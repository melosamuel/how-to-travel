let airports = ["GIG, Galeão - Rio de Janeiro Internacional, Brasil", "SDU, Santos Dumont - Rio de Janeiro, Brasil", "MCZ, Zumbi dos Palmares - Maceió, Brasil"];

let sortedAirports = airports.sort();

let from = document.getElementById("from");
let to = document.getElementById("to");
let from_wrapper = document.getElementById("from-wrapper");
let to_wrapper = document.getElementById("to-wrapper");

function displayNames_from(value) {
    from.value = value;
    from_wrapper.classList.add("invisible");
}

function displayNames_to(value) {
    to.value = value;
    to_wrapper.classList.add("invisible");
}

function removeElements(){
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => item.remove());
}

from.addEventListener("keyup", (e) => {
    removeElements();

    if (to_wrapper.childElementCount === 0) {
        to_wrapper.classList.add("invisible");
    }

    for(let a of sortedAirports){
        if(a.toLowerCase().startsWith(from.value.toLowerCase()) && from.value != ""){

            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames_from('"+a+"')");

            let word = "<b>"+ a.substring(0, from.value.length) +"</b>";
            word += a.substring(from.value.length);
            listItem.innerHTML = word;

            from_wrapper.appendChild(listItem);
            from_wrapper.classList.remove("invisible");
        }
    }
});

to.addEventListener("keyup", (e) => {
    removeElements();

    if (from_wrapper.childElementCount === 0) {
        from_wrapper.classList.add("invisible");
    }


    for(let a of sortedAirports){
        if(a.toLowerCase().startsWith(to.value.toLowerCase()) && to.value != ""){

            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames_to('" + a + "')");

            let word = "<b>"+ a.substring(0, to.value.length) +"</b>";
            word += a.substring(to.value.length);
            listItem.innerHTML = word;

            to_wrapper.appendChild(listItem);
            to_wrapper.classList.remove("invisible");
        }
    }
});