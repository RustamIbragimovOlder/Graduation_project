function clickCorrect() {
    document.getElementById("item").style.backgroundColor = "#A8E4A0";
    let elem = document.getElementsByClassName("answer");
    for (let i = 0; i < elem.length; i++) {
        elem[i].disabled = true;
    }
    document.getElementById("transition-box").style.display = 'flex';
    document.getElementById("transition-box").style.justifyContent = 'center';
}

function clickInCorrect() {
    document.getElementById("item").style.backgroundColor = "#F80000";
    let elem = document.getElementsByClassName("answer");
    for (let i = 0; i < elem.length; i++) {
        elem[i].disabled = true;
    }
    document.getElementById("transition-box").style.display = 'flex';
    document.getElementById("transition-box").style.justifyContent = 'center';

}