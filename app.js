var numberOfButtons = document.querySelectorAll(".key").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".key")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "q":
      var bubbles = new Audio("sounds/bubbles.mp3");
      bubbles.play();
      break;

    case "w":
      var clay= new Audio("sounds/clay.mp3");
      clay.play();
      break;

    case "e":
      var confetti = new Audio('sounds/confetti.mp3');
      confetti.play();
      break;

    case "r":
      var glimmer = new Audio('sounds/glimmer.mp3');
      glimmer.play();
      break;

    case "t":
      var moon = new Audio('sounds/moon.mp3');
      moon.play();
      break;

    case "y":
      var ufo = new Audio('sounds/ufo.mp3');
      ufo.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}