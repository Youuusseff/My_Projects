window.addEventListener("load",()=>{
    clock();
    function clock(){
        const today = new Date();
        const hours = today.getHours();
        const min = today.getMinutes();
        const sec = today.getSeconds();
        const hour = hours < 10 ? "0" + hours : hours;
        const mini = min < 10 ? "0" + min : min;
        const seco= sec < 10 ? "0" + sec : sec;
        const time = hour + ":" + mini + ":" + seco;
        document.getElementById("date-time").innerHTML = time;
        setTimeout(clock, 1000);
    }
});
const blacky = document.getElementById("color1");
const orangy = document.getElementById("color2");
const mauvy = document.getElementById("color3");
const purply = document.getElementById("color4");

blacky.addEventListener("click", function() {
    document.getElementById("watch").src = "/iOeUBV7 - Imgur.png";
});

orangy.addEventListener("click", function() {
    document.getElementById("watch").src = "/PTgQlim - Imgur.png";
});

mauvy.addEventListener("click", function() {
    document.getElementById("watch").src = "/xSIK4M8 - Imgur.png";
});

purply.addEventListener("click", function() {
    document.getElementById("watch").src = "/Mplj1YR - Imgur.png";
});

const timy = document.getElementById("clock");
const hearty = document.getElementById('heart');
const button_time = document.getElementById('Time');
const button_heart = document.getElementById('Heart-Rate');

button_heart.addEventListener("click", function() {
  timy.style.display = "none";
  hearty.style.display = "block";
});

button_time.addEventListener("click", function() {
  timy.style.display = "block";
  hearty.style.display = "none";
});
