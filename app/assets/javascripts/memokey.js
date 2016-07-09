
var Juego = function(){
    var longitud=0;
}


/*Funcion para el timer, contador a cero*/
Juego.prototype.timer = function(duration, display) {
	var timer = duration, minutes, seconds;
    
    var countDown=setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countDown);
            Juego.prototype.finish.call();
        }
        
    }, 1000);
};
/*Funcion para mostrar la palabra*/
Juego.prototype.show = function() {
    letra();
    longitud=text.length-1;
    $("#text").html(text.charAt(longitud));
    $("#text").show();
};

Juego.prototype.hideText = function() {
    $("#text").hide();
};

Juego.prototype.timeOut = function() {
    setTimeout(this.hideText,700)
};

Juego.prototype.evaluate = setInterval(function () {
    input=$("#answer").val();
    word=$("#text").html();

    if (input.length > text.length) {
         return timer=0;
    } else if (input.length == text.length && input==text) {
        score += 1;
        $("#score").html(score);
        // Vuelva a jugar
        Juego.prototype.show.call();
        $("#answer").val("");
    }

},500);
var text = "";
var score=0;
/*Metodo para generar letras aleatorias*/
var letra =function ()
{
    /*Variable que guarda los posibles caracteres para una palabra*/
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

// Envio de score a la vista mediante POST
Juego.prototype.finish = function() {
    setTimeout(function(){
      $.ajax({
      type: "POST",
      url: "/games/1/save_score",
      data:  {score:$("#score").text()},
      success: function(resp) {
                console.log("HOLA")
                window.location.assign("/games/1")
                // alert($(".message").html(resp.data.updated));
             },
             error: function(error) {
                window.location.assign("/games/1")
                // alert($(".message").html(error.statusText));
             },
      dataType: 'json'
    });
    },1);        
};    
    


$(document).ready( function () {


    // var game_id=juego_id
    document.getElementById('answer').focus()
    var oneMinutes = 60 * 0.2,
    display = document.querySelector('#time');
    var juego=new Juego();
    juego.timer(oneMinutes, display);
    juego.show();
    
    //juego.timeOut();

});
