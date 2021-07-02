"use strict";

const el = document.getElementById("result");

if(el) {
    let result = "n'importe quoi"
    const insert = prompt("insert Int").trim();
    const toCheck = parseInt(insert);

    if(!!isNaN && toCheck <= 20) {
        switch(true) {
            case (toCheck == 20) : result = "Excellent";
                break;
            case (toCheck >= 17) : result = "Très bien";
                break;
            case (toCheck >= 13) : result = "Bien";
                break;
            case (toCheck >= 10) : result = "Suffisant";
                break;
            case (toCheck <= 9)  : result = "Insuffisant";
                break;
            default : 
                result = "Échec";
                break;
        }        
    }
    el.innerHTML += result

}