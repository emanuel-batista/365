var audio = new Audio('365.mp3');
audio.loop = true;

function brat(){
    audio.play();
    var bratButton = document.getElementById("brat");
    bratButton.style.display = "none";
    var brat1 = document.getElementById("365");
    brat1.style.display = "block"; 
    
    epilepBrat();
    checkAudioPosition();
}

function epilepBrat(){
    var body = document.body; 
    var isGreen = false; 

    // Função que troca as cores
    setInterval(function() {
        if (isGreen) {
            body.style.backgroundColor = "#FFFFFF"; 
        } else {
            body.style.backgroundColor = "#8ACE00"; 
        }
        isGreen = !isGreen; 
    }, 50); 
}

function checkAudioPosition() {
    var brat1 = document.getElementById("365");
    
    setInterval(function() {
        var currentTime = audio.currentTime * 1000; // Pega o tempo atual em milissegundos

        // Verifica se está entre 6:555 (6555ms) e 6:958 (6958ms)
        if ((currentTime >= 6555 && currentTime <= 6958) || currentTime >= 13551) {
            brat1.textContent = "partygirl"; // Muda o texto para "partygirl"
        } else {
            brat1.textContent = "365"; // Volta o texto para "365"
        }

    }, 100); // Verifica a cada 100 milissegundos
}