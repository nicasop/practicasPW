cancion1 = document.querySelector("#can1");
cancion2 = document.querySelector("#can2");
cancion3 = document.querySelector("#can3");
cancion4 = document.querySelector("#can4");

function playCancion1(){
    stopCancion2();
    stopCancion3();
    stopCancion4();
    cancion1.play();
    duracion = cancion1.duration;
}
function pauseCancion1(){
    cancion1.pause();
}
function stopCancion1(){
    pauseCancion1();
    cancion1.currentTime = 0;
}

function playCancion2(){
    stopCancion1();
    stopCancion3();
    stopCancion4();
    cancion2.play();
}
function pauseCancion2(){
    cancion2.pause();
}
function stopCancion2(){
    pauseCancion2();
    cancion2.currentTime = 0;
}

function playCancion3(){
    stopCancion1();
    stopCancion2();
    stopCancion4();
    cancion3.play();
}
function pauseCancion3(){
    cancion3.pause();
}
function stopCancion3(){
    pauseCancion3();
    cancion3.currentTime = 0;
}

function playCancion4(){
    stopCancion1();
    stopCancion2();
    stopCancion3();
    cancion4.play();
}
function pauseCancion4(){
    cancion4.pause();
}
function stopCancion4(){
    pauseCancion4();
    cancion4.currentTime = 0;
}