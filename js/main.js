var ftSizeplus = document.querySelector(".font-size-plus")
var ftSizeminus = document.querySelector(".font-size-minus")
var colorBtn = document.querySelector(".change-color-btn")

var ftPow = 16;
ftSizeplus.onclick = function(){
    let everyP = document.getElementsByTagName('p');
    for(i=0;i<everyP.length;i++){
        everyP[i].style.fontSize = (ftPow+4)+"px";
        ftPow++;
    }
}


ftSizeminus.onclick = function(){
    let everyP = document.getElementsByTagName('p');
    for(i=0;i<everyP.length;i++){
        everyP[i].style.fontSize = (ftPow-4)+"px";
        ftPow--;
    }
}


colorBtn.onclick = function(){
    let inputVal = document.querySelector(".change-color-input").value;
    let everyP = document.getElementsByTagName('p');

    for(i=0;i<everyP.length;i++){
        everyP[i].style.color = inputVal;
    }
}