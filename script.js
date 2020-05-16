
var vel, dx, dy, px, py, jogador;
var anime = setInterval(game, 1000);

//window.addEventListener("load", inicia);

$(window).one('scroll', () => {
   // myFunction();
});



function myFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("jogador").style.backgroundColor = "gray";
        document.getElementById("jogador").style.opacity = 0.2;
        inicia();


        //  } else {
        //    document.getElementById("myP").innerHTML = "aaaaaaaaaaa";
        //  }
    }
}


function inicia() {
    vel = 200;
    dx = 1;
    dy = 0;
    px = 0;
    py = 0;
    jogador = document.getElementById("jogador");
    anime;
}


function game() {
    // s = s0 + vt
    px = px + vel * dx;
    // py = py + vel*dy;

    jogador.style.left = px + "px";
    // jogador.style.bottom = px+"px";

    if (px >= window.innerWidth) {
        dx = -1;
    } else if (px <= 0) {
        dx = 1;
        // clearInterval(anime);
    }

}




