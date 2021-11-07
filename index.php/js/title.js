if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 1000);

}

var x = 0;

var titleText = ["|", " ?|", " W|", " Wi|", " Wis|", " Wise|", " Wise", " Wise", " Wise", " Wise", " Wise", " Wise|", " Wis|", " Wi|", " W|",  " F|", " Fo|", " Foo|", " Fool|", " Fools|", " Fools", " Fools", " Fools", " Fools", " Fools", " Fools|", " Fool|", " Foo|", " Fo|", " F|", " |", " W|", " Wi|", " Wis|", " Wise|", " WiseF|", "WiseFo|", "WiseFoo|", "WiseFool|",  "WiseFools|",  "WiseFools|",  "WiseFools|",  "WiseFools|",  "WiseFools|",  "WiseFool|", "WiseFoo|", "WiseFo|", "WiseF|","Wise|", "Wis|", "Wi|", "W|", "|", " .|", " $|"];

WiseFools
function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

