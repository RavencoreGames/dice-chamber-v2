 document.getElementById("rollButton").onclick = function() {

    document.getElementById("dice").style.animation = "pulse 0.4s ease";

    let roll = Math.floor(Math.random() * 20) + 1;

    document.getElementById("dice").src = "D20-roll-01.png";

    setTimeout(function(){
        document.getElementById("dice").src = "D20-roll-02.png";
    },100);

    setTimeout(function(){
        document.getElementById("dice").src = "D20-roll-03.png";
    },200);

    setTimeout(function(){
        document.getElementById("dice").src = "D20-roll-04.png";
    },300);

    setTimeout(function(){
        document.getElementById("dice").src = "D20-roll-05.png";
    },400);

    setTimeout(function(){
        document.getElementById("dice").src = "D20-roll-06.png";
    },500);

    setTimeout(function(){
        document.getElementById("dice").src = "D20-" + roll + ".png";
        document.getElementById("result").innerHTML = roll;
    },575);

    setTimeout(function(){
        document.getElementById("dice").style.animation =
        "float 4s ease-in-out infinite";
    },575);

};

