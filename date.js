"use strict";

const el = document.getElementById("result");

if(el) {
    let result = "Date non valide"
    const insert = prompt("insert Date -> format \"DD-MM-YYYY\"").trim();

    let a = insert.split("-");
    a = a.map(Number);

    if(a.length === 3) {

        let maxD = NaN;
        switch(a[1]) {
            case 2 : maxD = ((a[2] % 4 === 0) && (a[2] % 100 > 0) || (a[2] % 400 === 0)) ? 29 : 28;
                break;

            case 4 :
            case 6 :
            case 9 : 
            case 11 : maxD = 30;
                break;
            default : maxD = 31;
                break;
        }

        console.log(a[1] +'->' + maxD);

        if(!isNaN(maxD) && a[0] <= maxD) {
            let d = new Date(a[2], (a[1] -1), a[0]);
            if(d) {
                result = d.toLocaleDateString("fr-BE", {weekday: 'long'})
            }              
        }
    }

    el.innerHTML += result 
}