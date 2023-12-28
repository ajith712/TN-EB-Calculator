import { HTMLHeader, checkMenuIsChecked, HTMLDropDown } from "./tnebheader.js";

const jsCalBtn = document.querySelector('.cal-btn');

const jsCalUnitBtn = document.querySelector('.cal-unit-btn');

const jsCalBillBtn = document.querySelector('.js-cal-bill-btn');

const curReadInput = document.querySelector('.units-input-cur-read');

const preReadInput = document.querySelector('.units-input-pre-read');

const inputUnits = document.querySelector('.units-input');





let billChart = [];

const freeUnits = document.querySelector('.free-100-units')
freeUnits.innerHTML = `(As Per Tamilnadu Government, First 100 Units Free.😉😁)`;


document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        if(inputUnits.value && !curReadInput.value && !preReadInput.value){
            jsCalBtn.click();
        }
        else if(curReadInput.value && preReadInput.value){
            jsCalUnitButton();
            jsCalBillButton();
        }
    }
})


jsCalBtn.addEventListener("click",function (){
     jsCalButton();
})

function jsCalButton(){
    const ebUnits = Number(inputUnits.value);
    billChart = [{
        units: 'Units ⚡',
        price: 'Price 💴'
    },{
        units: '1 - 100 Units',
        price: 0
    }];
    console.log(ebUnits);
    calculateAmt(ebUnits);
}

function calculateAmt(ebUnits){
    let ebAmt = 0;
    freeUnits.classList.add('free-100-units-check');
    document.querySelector('.save-eb').classList.add('save-eb-want');
    document.querySelector('.bill-chart-con').classList.remove("bill-chart-con-dont-want");
    
    if(ebUnits <= 500){
        if(ebUnits <= 0){
            alert('Kindly Enter a Valid Reading Units');
            freeUnits.classList.remove('free-100-units-check');
            document.querySelector('.bill-chart-con').classList.add("bill-chart-con-dont-want");
            document.querySelector('.cal-btn-checked-show-text').classList.add('cal-btn-checked-show-text-click');
            document.querySelector('.save-eb').classList.remove('save-eb-want');
        }
        else if(ebUnits > 0 && ebUnits <=100){
            ebAmt = 0;
            billChart.pop();
            billChart.push({
                units: `0 - ${ebUnits} Units`,
                price: ebAmt});
        }
        else if(ebUnits > 100 && ebUnits <= 200){
            ebAmt = (ebUnits-100)*2.25;
            billChart.push({
                units: `101 - ${ebUnits} Units`,
                price: ebAmt});
        }
        else if(ebUnits > 200 && ebUnits <= 400){
            ebAmt = (100*2.25) + (ebUnits-200)*4.50;
            billChart.push({
                units: `101 - 200 Units`,
                price: 225},
                {
                units: `201 - ${ebUnits} Units`,
                price: (ebUnits-200)*4.50});
        }
        else if(ebUnits > 400 && ebUnits <=500){
            ebAmt = (100*2.25) + (200*4.50) +(ebUnits-400)*6.00;
            billChart.push({
                units: `101 - 200 Units`,
                price: 225
                },{
                units: `201 - 400 Units`,
                price: 200*4.50}
                ,{
                    units: `401 - ${ebUnits} Units`,
                    price: (ebUnits-400)*6.00
                });
        }
    }
    else {
    billChart.push({
                units: `101 - 400 Units`,
                price: 300*4.50
                },{
                units: `401 - 500 Units`,
                price: 100*6
                });
        if(ebUnits > 500 && ebUnits <=600){
            ebAmt = (300*4.50) + (100*6.00) + (ebUnits-500)*8;

            billChart.push({
            units: `501 - ${ebUnits} Units`,
            price: (ebUnits-500)*8.00
            });
        }
        else if(ebUnits > 600 && ebUnits <=800){
            ebAmt = (300*4.50) + (100*6.00) + (100*8) + (ebUnits-600)*9;

            billChart.push({
            units: `501 - 600 Units`,
            price: 100*8.00
            },{
            units: `601 - ${ebUnits} Units`,
            price: (ebUnits-600)*9.00});
        }
        else if(ebUnits > 800 && ebUnits <=1000){
            ebAmt = (300*4.50) + (100*6.00) + (100*8) + (200*9.00) + (ebUnits-800)*10.00;

            billChart.push({
            units: `501 - 600 Units`,
            price: 100*8.00
            },{
            units: `601 - 800 Units`,
            price: 200*9.00
            },{
            units: `801 - ${ebUnits} Units`,
            price: (ebUnits-800)*10.00
            });
        }
        else if(ebUnits > 1000){
            ebAmt = (300*4.50) + (100*6.00) + (100*8) + (200*9.00) + (200*10) + (ebUnits-1000)*11;

            billChart.push({
            units: `501 - 600 Units`,
            price: 100*8.00
            },{
            units: `601 - 800 Units`,
            price: 200*9.00
            },{
            units: `801 - 1000 Units`,
            price: 200*10.00
            },{
            units: `1001 - ${ebUnits} Units`,
            price: (ebUnits-1000)*11.00
            });
        }
    }
    billChart.push({units: `Total (${ebUnits} Units)`,
            price: ebAmt});
    
            
    document.querySelector('.eb-amt').innerHTML = `${ebAmt.toFixed(2)}`;

    //const jsEmoji = document.querySelector('.emoji');

    /*
    if(ebAmt<=100){
        jsEmoji.innerHTML =  `&nbsp;&nbsp;😉✌️`; 
    }
    else if(ebAmt>100 && ebAmt<=500){
        jsEmoji.innerHTML = `&nbsp;&nbsp;😊👌`
    }
    else if(ebAmt>500 && ebAmt<=1000){
        jsEmoji.innerHTML = `&nbsp;&nbsp;🙂👍`
    }
    else if(ebAmt>1000){
        jsEmoji.innerHTML = `&nbsp;&nbsp;😅🤨`
    }*/
    

    let billChartDataHTML = '';

    billChart.forEach((chartItem) => {
        
        billChartDataHTML += `<tr class="table-cell-data">
                                <td class="table-cell">${chartItem.units}</td><td class="table-cell">₹ ${chartItem.price}</td>
                                </tr>`
    });


    document.querySelector('.bill-chart-table').innerHTML = billChartDataHTML;
}



jsCalUnitBtn.addEventListener("click", function (){
    jsCalUnitButton();
})


//Part Two

function jsCalUnitButton(){
    const curRead = Number(curReadInput.value);
    const preRead = Number(preReadInput.value);
    if(curRead>preRead){
        const units = curRead - preRead;
    document.querySelector('.calculated-units').innerHTML = `${units} Units`;
    document.querySelector('.js-cal-bill-btn').classList.add("js-cal-bill-btn-check");
    return units;
    }
    else{
        alert('Kindy Enter the valid input!!!,Current Month Reading Cannot be Less Than The Previous Bill Reading!!!');
    }
    document.querySelector('.cal-btn-checked-show-text').classList.add('cal-btn-checked-show-text-click');
}

jsCalBillBtn.addEventListener("click",function (){
    jsCalBillButton();
})

function jsCalBillButton(){
    const getUnitValue = jsCalUnitButton();
    inputUnits.value = `${getUnitValue}`;
    jsCalButton();
    window.scrollTo({
     top: 100,
     left: 0,
     behavior: "smooth",
     });
}

//Header

const jsHeader = document.querySelector('.header');
const jsDropDownMenu = document.querySelector('.drop-down-menu');

jsHeader.innerHTML = HTMLHeader();

jsDropDownMenu.innerHTML = HTMLDropDown();

document.querySelector('.header-title').addEventListener("click", function (){
    location.reload();
})

let checkVar = 0;

document.querySelector('.menu-icon').addEventListener("click", function(){
    console.log('click');
    checkMenuIsChecked(checkVar);
    checkVar++;
})

document.querySelector('.fa-close').addEventListener("click", function(){
    console.log('click');
    checkMenuIsChecked(checkVar);
    checkVar++;
})
