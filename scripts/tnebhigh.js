import { HTMLHeader, checkMenuIsChecked, HTMLDropDown } from "./tnebheader.js";

const jsTnEbHighHeader = document.querySelector('.tnebhigh-header');
const jsHighDropDownMenu = document.querySelector('.high-page-drop-down-menu');

jsTnEbHighHeader.innerHTML = HTMLHeader();
jsHighDropDownMenu.innerHTML = HTMLDropDown();

document.querySelector('.header-title').addEventListener("click", function (){
    location.reload();
})

let checkVar = 0;

document.querySelector('.menu-icon').addEventListener("click", function(){
    checkMenuIsChecked(checkVar);
    checkVar++;
})

document.querySelector('.fa-close').addEventListener("click", function(){
    console.log('click');
    checkMenuIsChecked(checkVar);
    checkVar++;
})