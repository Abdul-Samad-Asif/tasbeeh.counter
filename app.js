let text = document.getElementById("text");
let count = 0;
function Inc() {
count++;
text.innerText = count;
}
function Res() {
    count = 0;
text.innerText = count;
}
