export function HTMLHeader() {
    const headerHTML = `
<div class="header-menu-con">      
                    <div class="menu-bar">
                        <span class="menu-icon"><i class="glyphicon glyphicon-align-justify"></i></span>
                    </div>
                    <div class="close-bar">
                        <span class="close-icon"> Menu  &nbsp; &nbsp; &nbsp;<i class="fa fa-close"></i></span>
                    </div>
                </div>
            <div class="header-title">TN-EB Calculator</div>
            <div class="logo"><img class="tneblogo" src="images/tn_eb_emblem.jpg" alt=""></div>`;

            return headerHTML;
}        

export function HTMLDropDown(){
const DropDownHTML = `<div class="menu-bar-link-con">
                <a class="menu-bar-link" href="index.html"><i class="fa fa-home"></i><span> Home</span></a>
                <a class="menu-bar-link" href="ebtariffchart.html"><i class="fa fa-file"></i><span> Tariff Chart</span></a>
                <a class="menu-bar-link" href="tnebhighbill.html"><i class="fa fa-industry"></i><span> High Consume Check</span></a>
                <a class="menu-bar-link" href="index.html#about"><i class="fa fa-question"></i><span></span> About</span></a>
                </div>`

                return DropDownHTML;
}



export function checkMenuIsChecked(checkVar){
    if(checkVar%2 == 0)
    {
    document.querySelector('.menu-bar').classList.add('menu-bar-checked');
    document.querySelector('.close-bar').classList.add('close-bar-checked');
    document.querySelector('.menu-bar-link-con').classList.add('menu-bar-link-con-checked');
    toChangeWrong();
    }
    else {
    document.querySelector('.menu-bar').classList.remove('menu-bar-checked');
    document.querySelector('.close-bar').classList.remove('close-bar-checked');
    document.querySelector('.menu-bar-link-con').classList.remove('menu-bar-link-con-checked');
    toChangeMenu();
    }
}

function toChangeWrong(){    
}

function toChangeMenu(){
}

