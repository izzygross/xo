var selectedCell = "win";
var izzyTurn = "X";

function izzyChangeColor(cell) {
    document.getElementById(selectedCell).style.borderColor = "black";
    if (izzyTurn == "X") {
        document.getElementById(cell).style.borderColor = "blue";
        changeColor('blue')
    } else {
        document.getElementById(cell).style.borderColor = "yellow"
        changeColor('yellow')
    }
    selectedCell = cell;
};


function izzyWin() {
    var winIzzy = false;

    if ((document.getElementById("a1").innerHTML == document.getElementById("a2").innerHTML) &&
        (document.getElementById("a1").innerHTML == document.getElementById("a3").innerHTML) &&
        document.getElementById("a1").innerHTML != "") {
            document.getElementById("a1").style.borderColor = "green";
            document.getElementById("a2").style.borderColor = "green";
            document.getElementById("a3").style.borderColor = "green";
            winIzzy = true;
    }

    if ((document.getElementById("b1").innerHTML == document.getElementById("b2").innerHTML) && (document.getElementById("b1").innerHTML == document.getElementById("b3").innerHTML) && document.getElementById("b1").innerHTML != "") {
        document.getElementById("b1").style.borderColor = "green";
        document.getElementById("b2").style.borderColor = "green";
        document.getElementById("b3").style.borderColor = "green";
        winIzzy = true;
    }

    if ((document.getElementById("c1").innerHTML == document.getElementById("c2").innerHTML) && (document.getElementById("c1").innerHTML == document.getElementById("c3").innerHTML) && document.getElementById("c1").innerHTML != "") {
        document.getElementById("c1").style.borderColor = "green";
        document.getElementById("c2").style.borderColor = "green";
        document.getElementById("c3").style.borderColor = "green";
        winIzzy = true;
    }

    if ((document.getElementById("a1").innerHTML == document.getElementById("b1").innerHTML) && (document.getElementById("a1").innerHTML == document.getElementById("c1").innerHTML) && document.getElementById("a1").innerHTML != "") {
        document.getElementById("a1").style.borderColor = "green";
        document.getElementById("b1").style.borderColor = "green";
        document.getElementById("c1").style.borderColor = "green"; winIzzy = true;
    }

    if ((document.getElementById("a2").innerHTML == document.getElementById("b2").innerHTML) && (document.getElementById("a2").innerHTML == document.getElementById("c2").innerHTML) && document.getElementById("a2").innerHTML != "") {
        document.getElementById("a2").style.borderColor = "green";
        document.getElementById("b2").style.borderColor = "green";
        document.getElementById("c2").style.borderColor = "green"; winIzzy = true;
    }

    if ((document.getElementById("a3").innerHTML == document.getElementById("b3").innerHTML) && (document.getElementById("a3").innerHTML == document.getElementById("c3").innerHTML) && document.getElementById("a3").innerHTML != "") {
        document.getElementById("a3").style.borderColor = "green";
        document.getElementById("b3").style.borderColor = "green";
        document.getElementById("c3").style.borderColor = "green";
        winIzzy = true;
    }

    if ((document.getElementById("a1").innerHTML == document.getElementById("b2").innerHTML) && (document.getElementById("a1").innerHTML == document.getElementById("c3").innerHTML) && document.getElementById("a1").innerHTML != "") {
        document.getElementById("a1").style.borderColor = "green";
        document.getElementById("b2").style.borderColor = "green";
        document.getElementById("c3").style.borderColor = "green";
        winIzzy = true;
    }

    if ((document.getElementById("a3").innerHTML == document.getElementById("b2").innerHTML) && (document.getElementById("a3").innerHTML == document.getElementById("c1").innerHTML) && document.getElementById("a3").innerHTML != "") {
        document.getElementById("a3").style.borderColor = "green";
        document.getElementById("b2").style.borderColor = "green";
        document.getElementById("c1").style.borderColor = "green";
        winIzzy = true;
    }
    return winIzzy;
}


function izzyPressKey() {
    if (document.getElementById(selectedCell).innerHTML == "" ) {

        document.getElementById(selectedCell).innerHTML = izzyTurn;
        if (izzyTurn == "X") {
            izzyTurn = "O";
            changeColor('yellow')
        }
        else{ 
            (izzyTurn = "X")
            changeColor('blue')
        };
        
        if (izzyWin()) { 
            document.getElementById("win").innerHTML = "YOU WON <button onclick='refresh()' style='font-size: 50;'>refresh</button> "
            
        };
    }
}

function changeColor(color) {
        document.getElementById("turn").style.color = color;
        document.getElementById("turn").innerHTML = color;
}

function refresh(){
    location.reload();
}

