'use strict';


var arrOfImgs = [];
var shownImgs = [];
var arrayOfStorage = [];
var arrName = [];
var arrCount = [];
var arrShown = [];

var trialsleft = 25;
var ul;
var li;

var leftImg = document.getElementById("leftimg");
var middleImg = document.getElementById("middleimg");
var rightImg = document.getElementById("rightimg");
var call = document.getElementById("allImges");
var btn = document.getElementById("btnShow");
var btnCanvas = document.getElementById("btnShowCanvas")
var imageCanvas = document.getElementById("canvasId");
var divUl = document.getElementById("ul");



function Imgs(name, img) {

    this.image = img;
    this.name = name;
    this.url = 'image/' + img;
    this.counter = 0;
    this.imgsShow = 0;

    arrOfImgs.push(this);


}


function localDataSet() {

    localStorage.setItem('imgData', JSON.stringify(arrOfImgs));
}

console.log(localStorage);

function checkIfEmtpy() {

    if (localStorage.length > 0) {
        arrOfImgs = JSON.parse(localStorage.getItem('imgData'));
    }
}

function renderChart() {

    arrName = [];
    arrCount = [];
    arrShown = [];


    for (var index = 0; index < arrOfImgs.length; index++) {

        arrName.push(arrOfImgs[index].name);
        arrCount.push(arrOfImgs[index].counter);
        arrShown.push(arrOfImgs[index].imgsShow);

    }
    localDataSet();

    var chart = new Chart(imageCanvas, {
        type: 'bar',
        data: {
          labels: arrName,
          datasets: [
            {
            label: 'of Images Clicks',
            data: arrCount,
            backgroundColor: ["gray","gray","gray","gray","gray","gray","gray","gray","gray","gray",
            "gray","gray","gray","gray","gray","gray","gray","gray","gray","gray",]
          },
          {
            label: 'Time shown for the Images',
            data: arrShown,
            backgroundColor: ["black","black","black","black","black","black","black","black","black",
            "black","black","black","black","black","black","black","black","black","black","black",],
          }]
        },
        

    });

}

function renderImgs(leftImgRender, middleImgRender, rightImgRender) {

    leftImg.setAttribute('src', arrOfImgs[leftImgRender].url);
    middleImg.setAttribute('src', arrOfImgs[middleImgRender].url);
    rightImg.setAttribute('src', arrOfImgs[rightImgRender].url);

    arrOfImgs[leftImgRender].imgsShow++;
    arrOfImgs[middleImgRender].imgsShow++;
    arrOfImgs[rightImgRender].imgsShow++;
    
}

function sameName(newName) {

    for (var index = 0; index < shownImgs.length; index++) {
        if (shownImgs[index].name === newName) {
            return true
        }

    }
    return false
}

function pickAnImg() {


    do {
        var lImgs = Math.round(Math.random() * (arrOfImgs.length - 1));
        var lImgName = arrOfImgs[lImgs].name;
    } while (sameName(lImgName));


    do {
        var mImgs = Math.round(Math.random() * (arrOfImgs.length - 1));
        var mImgName = arrOfImgs[mImgs].name;
        var rImgs = Math.round(Math.random() * (arrOfImgs.length - 1));
        var rImgName = arrOfImgs[rImgs].name;

    } while (lImgs === mImgs || lImgs === rImgs || mImgs === rImgs || sameName(mImgName) || sameName(rImgName));


 
    shownImgs = [];

    shownImgs.push(arrOfImgs[lImgs], arrOfImgs[mImgs], arrOfImgs[rImgs])

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

function countImgs(event) {



    var targetId = event.target.id;

    if (trialsleft != 0) {

        if (targetId === 'leftimg' || targetId === 'middleimg' || targetId === 'rightimg') {
            var objectIndicator = event.target.getAttribute('src');
            checkImges(objectIndicator);
            pickAnImg();

           
        } else {
            call.removeEventListener('click', countImgs);


        }
    }
    else {
        displayButton();
    }

}

function showResult() {

    divUl.innerHTML = "";

    for (let index = 0; index < arrOfImgs.length; index++) {

        li = document.createElement('li');
        li.textContent = "you have picked the " + arrOfImgs[index].name + " " + arrOfImgs[index].counter + " time/s and you have seen it " + arrOfImgs[index].imgsShow + " time/s";
        divUl.appendChild(li);
    }

}

function displayButton() {
    btn.style.display = "block";
    btnCanvas.style.display = "block";
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


checkIfEmtpy();
pickAnImg();
call.addEventListener('click', countImgs);
btn.addEventListener('click', showResult);
btnCanvas.addEventListener('click', renderChart);





