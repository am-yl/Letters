let clicked = false;

let title = document.getElementsByTagName("title")[0];
let titles = ['Boîte de réception', "Un nouveau messsage ! ♥"];

let close = document.getElementById("enveloppe-close");
let open = document.getElementById("enveloppe-open");
let cursor = document.getElementsByTagName("link")[0];
let notif = document.getElementById("notif");

let music = document.getElementById("sync");
music.volume = 0.1;

// Changing title
setTimeout(function() {
    title.innerText = titles[1];
    changeTitle();
}, 2500);

function changeTitle() {
    setInterval(function() {
        if(title.innerText == titles[1]) {
            title.innerText = titles[0];
        } else {
            title.innerText = titles[1];
        }
    }, 1000);
}

// Open letter
close.addEventListener("click", function() {

    close.classList.add("invisible", "h");
    notif.classList.add("invisible", "hidden");
    open.classList.remove("invisible", "hidden");
    document.getElementById("enveloppes").style.paddingTop = "15vh";

    titles[1] = "Ouverture de l'enveloppe ♥";

    cursor.setAttribute("href", "assets/img/Enveloppe-open.svg");

    music.play();
});

// Get letter
open.addEventListener("click", function() {
    if(!clicked) {
        document.getElementById("letter").classList.remove('hideLetter');
        document.getElementById("letter").classList.add('showLetter');
        var typed = new Typed("#letter", {
            stringsElement: '#p1',
            typeSpeed: 15,
            startDelay : 3000,
            fadeOut:true,
            loop: false,
            showCursor:false,
            onComplete: function(self) { titles[1]="2 mots & demi ♥"; },
        });

        open.style.cursor = "url('assets/img/cursor.png'), auto";
        cursor.setAttribute("href", "assets/img/Heart.svg");
        titles[1] = "Affichage du message ♥";
        clicked = true;
    }
});

