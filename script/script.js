$(document).ready(function () {
    $('.btn').click(function () {
        $(this).toggleClass('in').next().slideToggle();
    });
});


var score1 = 0;
function cMinus() {
    score1--;
    console.log(score1);
    document.getElementById("counter").innerHTML = score1;
}

function cPlus() {
    score1++;
    console.log(score1);
    document.getElementById("counter").innerHTML = score1;
}
