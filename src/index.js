import "./styles.css";
var ball = document.getElementById("ball");
ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px";

function getpos(p) {
  console.log("getpos fired");
  return p + "px";
}

function move(e) {
  console.log("move fired");

  var top = parseInt(ball.style.top);
  var left = parseInt(ball.style.left);

  if (e == "w" || e == "W") {
    if (top > 5) {
      ball.style.top = getpos(top - 10);
    }
  }

  if (e == "a" || e == "A") {
    if (left > 5) {
      ball.style.left = getpos(left - 10);
    }
  }

  if (e == "s" || e == "S") {
    if (window.innerHeight - top > 5) ball.style.top = getpos(top + 10);
  }

  if (e == "d" || e == "D") {
    if (window.innerWidth - left > 5) ball.style.left = getpos(left + 10);
  }
}

window.addEventListener("keypress", function (event) {
  var key = event.key;
  console.log(key);
  move(key);
});
