var i = 0;
var images = [];
var time = 3000;

images[0] = 'assets/image/slide1.png';
images[1] = 'assets/image/slide2.png';
images[2] = 'assets/image/slide3.png';
images[3] = 'assets/image/slide4.jpg';
images[4] = 'assets/image/slide5.png';

function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;