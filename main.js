var colors = ["#010409", "white"];
var colorst = ["#61676C", "black"];
var colorIndex = 0;
function changeBg() {
        var col = document.getElementById("bdy_1");
        var colb = document.getElementById("cntr_next");
        var colc = document.getElementById("dd-content");
        if( colorIndex >= colors.length ) {
            colorIndex = 0;
        }
        col.style.backgroundColor = colors[colorIndex];
        col.style.color = colorst[colorIndex];
        colb.style.color = colorst[colorIndex];
        colorIndex++;
}
function home() {
        window.location.href = "/HTML/index.html";
}
function github() {
        window.location.href = "https://github.com/Moonsoft12";
}
function mail() {
        window.location.href = "mailto:moonsoftmail@gmail.com";
}
function info() {
        window.location.href = "/HTML/info.html";
}
function chat() {
        window.location.href = "/HTML/chat.html";
}
function privacy() {
        window.location.href = "/HTML/privacy_policy.html"
}
function forum() {
        window.location.href = "/HTML/forum.html";
}
function contact() {
        window.location.href = "/HTML/contact.html";
}
