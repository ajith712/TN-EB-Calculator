import { HTMLHeader, checkMenuIsChecked, HTMLDropDown } from "./tnebheader.js";

const jsTariffHeader = document.querySelector('.eb-tariff-chart-header');
const jsTariffMenuDropDown = document.querySelector('.tariff-drop-down-menu');

jsTariffHeader.innerHTML = HTMLHeader();
jsTariffMenuDropDown.innerHTML = HTMLDropDown();

document.querySelector('.header-title').addEventListener("click", function (){
    location.reload();
})

let checkVar = 0;

document.querySelector('.menu-icon').addEventListener("click", function(){
    checkMenuIsChecked(checkVar);
    checkVar++;
})

document.querySelector('.fa-close').addEventListener("click", function(){
    checkMenuIsChecked(checkVar);
    checkVar++;
})