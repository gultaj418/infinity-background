var num = 0;
var start = setInterval(progress, 65);

function progress() {
  num++;
  if (num == 101) {
    clearInterval(start);
  } else {
    var counter = document.querySelector(".counter");
    counter.innerHTML = num + "%";
  }
}

setTimeout(stopPoint, 6500);
function stopPoint() {
  var stop = document.querySelector(".stop");
  stop.style.display = "block";
}
