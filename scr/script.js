'use strict';


var arrOfImgs = [];

var leftImg = document.getElementById("leftimg");
var middleImg = document.getElementById("middleimg");
var rightImg = document.getElementById("rightimg");

var call=document.getElementById("allImges");
var btn =document.getElementById("btnShow");

var trialsleft = 25;


var ul;
var li;
var divUl=document.getElementById("ul");

function Imgs(name, img) {
    this.image = img;
    this.name = name;
    this.url = 'image/' + img;
    this.counter = 0;
    this.imgsShow = 0;

    arrOfImgs.push(this);
}

function renderImgs(leftImgRender, middleImgRender, rightImgRender) {

    leftImg.setAttribute('src', arrOfImgs[leftImgRender].url);
    middleImg.setAttribute('src', arrOfImgs[middleImgRender].url);
    rightImg.setAttribute('src', arrOfImgs[rightImgRender].url);

    arrOfImgs[leftImgRender].imgsShow++;
    arrOfImgs[middleImgRender].imgsShow++;
    arrOfImgs[rightImgRender].imgsShow++;
}

function pickAnImg() {
    var lImgs = Math.round(Math.random() * (arrOfImgs.length - 1));
    



    // while (lImgs === mImgs || lImgs === rImgs) {
    //     mImgs = Math.round(Math.random() * (arrOfImgs.length - 1));
    //     rImgs = Math.round(Math.random() * (arrOfImgs.length - 1));

    //     while (mImgs === rImgs || rImgs === lImgs) {
    //         rImgs = Math.round(Math.random() * (arrOfImgs.length - 1));

    //     }
    // }

    do {

        var mImgs = Math.round(Math.random() * (arrOfImgs.length - 1));
        var rImgs = Math.round(Math.random() * (arrOfImgs.length - 1));
        
    } while (lImgs === mImgs || lImgs === rImgs || mImgs === rImgs);

    renderImgs(lImgs, mImgs, rImgs)


}

function checkImges(objectIndicator) {
    for (var index = 0; index < arrOfImgs.length; index++) {
      if (arrOfImgs[index].url === objectIndicator) {
        arrOfImgs[index].counter++;
        trialsleft--;
      }
    }
  }

function countImgs(event){

    var targetId=event.target.id;
    console.log(targetId);

    if (trialsleft != 0) {

        if (targetId === 'leftimg' || targetId === 'middleimg' ||targetId==='rightimg') { 
            var objectIndicator = event.target.getAttribute('src');
            checkImges(objectIndicator);
            pickAnImg();
        
    }else{
        call.removeEventListener('click',countImgs);

    }
}
}

new Imgs("bag", "bag.jpg");
new Imgs("banana", "banana.jpg");
new Imgs("bathroom", "bathroom.jpg");
new Imgs("boots", "boots.jpg");
new Imgs("pen", "pen.jpg");
new Imgs("shark", "shark.jpg");
new Imgs("breakfast", "breakfast.jpg");
new Imgs("pebubblegumn", "bubblegum.jpg");
new Imgs("chair", "chair.jpg");
new Imgs("cthulhu", "cthulhu.jpg");
new Imgs("dog-duck", "dog-duck.jpg");
new Imgs("dragon", "dragon.jpg");
new Imgs("pet-sweep", "pet-sweep.jpg");
new Imgs("scissors", "scissors.jpg");
new Imgs("sweep", "sweep.png");
new Imgs("tauntaun", "tauntaun.jpg");
new Imgs("unicorn", "unicorn.jpg");
new Imgs("usb", "usb.gif");
new Imgs("water-can", "water-can.jpg");
new Imgs("wine-glass", "wine-glass.jpg");

console.log(arrOfImgs[5].counter);

function showResult(){

    divUl.innerHTML="";

    for (let index = 0; index < arrOfImgs.length; index++) {
        
        li = document.createElement('li');
        li.textContent ="you have picked the "+arrOfImgs[index].name+" "+arrOfImgs[index].counter+" time/s and you have seen it "+arrOfImgs[index].imgsShow+" time/s";
        divUl.appendChild(li);
    }
    
}

pickAnImg();
call.addEventListener('click',countImgs);
btn.addEventListener('click',showResult)



