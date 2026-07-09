const effects = document.getElementById("effects");

function createParticle(){

    const particle = document.createElement("div");

    particle.className = "particle";
const duration = 4 + Math.random() * 3;

particle.style.animationDuration = duration + "s";
    particle.style.width = (4 + Math.random() * 8) + "px";
particle.style.height = particle.style.width;

    
particle.style.left = (42 + Math.random() * 16) + "%";
particle.style.top = (58 + Math.random() * 8) + "%";

    effects.appendChild(particle);

setTimeout(function(){
    particle.remove();
}, duration * 1000);
    
}
setInterval(createParticle,250);
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
