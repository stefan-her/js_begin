"use strict";

const formNode = document.getElementsByTagName("form")[0];
const inputItem = formNode.elements[0];
const inputPrice = formNode.elements[1];
const budgetSpan = document.getElementById("display").getElementsByTagName("span")[0];
const maxSpendSpan = document.getElementById("display").getElementsByTagName("span")[1];
const middleSpendSpan = document.getElementById("display").getElementsByTagName("span")[2];

const items = new Set();
let maxSpend = NaN;
let middleSpend = NaN;

init();

function init() {
    if(isNaN(maxSpend)) {
        maxSpend = parseFloat(prompt("insert max Budget : ").replace(",", "."));
        if(!isNaN(maxSpend)) { updateSpan(budgetSpan, maxSpend); }
        else { init(); }
    }
}

function updateSpan(span, v) {
    span.innerHTML = v;
}

function eventSubmit(e) { 
    e.preventDefault();
    addToListe();
    searchMax();
    middle();
}

function middle() {
    let a = [];
    let total = 0;
    items.forEach(function(value) { 
        total += value.get("price"); 
    });

    let middle = total / items.size;
    updateSpan(middleSpendSpan, middle);
}   

function searchMax() {
    let max = 0;
    items.forEach(function(value) {
        if(value.get("price") > max) { 
            max = value.get("price");
        }
    });
    updateSpan(maxSpendSpan, max);
}

function addToListe() {
    let element = inputItem.value;
    let price = parseFloat(inputPrice.value.replace(",", "."));

    if(element != "" && !isNaN(price)) {

        if((maxSpend - price) >= 0) {

            let item = new Map();
            item.set("item", element);
            item.set("price", price);

            let flag = true;
            items.forEach(function(value) {
                if(value.get("price") == price) {
                    let conf = confirm(`le prix ${value.get("price")} pour  ${value.get("item")} existe déjà`);
                    if(!conf) { flag = false; }
                }
            });

            if(flag) {
                items.add(item);
                maxSpend -= price;
                updateSpan(budgetSpan, maxSpend);
            }            
        } else {
            alert("plus de budget");
        }

    }
}

formNode.addEventListener("submit", eventSubmit);






