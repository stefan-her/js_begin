
"use strict";

const el = document.getElementById("result");

if(el) {
    let result = "n'importe quoi"
    const insert = prompt("insert year").trim();

    const toCheck = parseInt(insert);
    if(!isNaN(toCheck)) {
        const checked = ((toCheck % 4 === 0) && (toCheck % 100 > 0) || (toCheck % 400 === 0) );
        result = (checked) ? "bissextile" : "pas  bissextile";
    } 

    el.innerHTML += result
}



