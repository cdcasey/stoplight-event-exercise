/*(function () {
  'use strict';

  var controls = document.querySelector('#controls');

  var red = document.querySelector('#stopLight');
  var yellow = document.querySelector('#slowLight');
  var green = document.querySelector('#goLight');

  function switchLights(color) {

  }
  controls.addEventListener('click', function (ev) {
    console.log(ev.target);
    if (ev.target.id === "stopButton") {
      red.classList.add("stop");
      yellow.classList.remove("slow");
      green.classList.remove("go");
    }
    else if (ev.target.id === "slowButton") {
      yellow.classList.add("slow");
      red.classList.remove("stop");
      green.classList.remove("go");
    }
    else if (ev.target.id === "goButton") {
      green.classList.add("go");
      yellow.classList.remove("slow");
      red.classList.remove("stop");
    }
  })
})();
*/

(function () {
  'use strict';

  let lights = {
    stop: document.querySelector("#stopLight"),
    slow: document.querySelector("#slowLight"),
    go: document.querySelector("#goLight"),
  }

  let buttonDiv = document.querySelector("#controls");

  buttonDiv.addEventListener('click', (event) => {
    let lightBehavior = event.target.innerText.toLowerCase();
    for (const key in lights) {
      if (lights.hasOwnProperty(key)) {
        const light = lights[key];
        lights[key].setAttribute('class', 'bulb');
      }
      lights[lightBehavior].classList.add(lightBehavior);
    }
  })

})();