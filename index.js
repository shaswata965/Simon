  var compareArray = [];
    var stringArray = [];
    var i = 0;
    var buttonColours = ["green", "red", "blue", "yellow"];
    var started = false;
    $("body").keydown(function() {
      if (!started) {
        $("h1").text("Level " + i);
        nextSequence();
        started = true;
      }
    });
    $(".btn").click(function() {
      if (!started) {
        $("h1").text("Level " + i);
        nextSequence();
        started = true;
      }
    });


    $("button").click(function() {
      var buttonInnerHtml = this.innerHTML;
      sounds(buttonInnerHtml);
      animation(buttonInnerHtml);
      answerChecker(buttonInnerHtml);
      answerVerifier(compareArray.length-1);
    });

    function answerVerifier(currentLevel) {
      if (compareArray[currentLevel] === stringArray[currentLevel]) {
        if (compareArray.length === stringArray.length) {

          setTimeout(function() {
            nextSequence();
          }, 1000);

        }

      } else {
        var end = new Audio("sounds/end.wav")
        end.play();
        $("body").toggleClass("end");
        setTimeout(function() {
          $("body").toggleClass("end");
        }, 150);
        setTimeout(function() {
         $("h1").text("Game Over. Good Luck Next Time!!")
       }, 150);
        setTimeout(function() {
         location.reload();
       }, 2150);

      }
}
function nextSequence() {
  compareArray = [];
  i++;
  $("h1").text("Level " + i);
  var x = Math.floor(Math.random() * 4);
    stringArray.push("" + x);
    var randomChosenColour = buttonColours[x];
     $("." + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
          sounds(randomChosenColour);

}

    function answerChecker(inputChecker) {

      switch (inputChecker) {
        case "green":
          compareArray.push("0");
          break;
        case "red":
          compareArray.push("1");
          break;
        case "yellow":
          compareArray.push("3");
          break;
        case "blue":
          compareArray.push("2");
          break;
        default:
          console.log(buttonInner);
      }

    }


    function sounds(key) {
      switch (key) {
        case "green":
          var greens = new Audio("sounds/green.wav");
          greens.play();
          break;
        case "blue":
          var blues = new Audio("sounds/blue.wav");
          blues.play();
          break;
        case "red":
          var reds = new Audio("sounds/red.wav");
          reds.play();
          break;
        case "yellow":
          var yellows = new Audio("sounds/yelow.wav");
          yellows.play();
          break;
        default:
          console.log(key);

      }
    }

    function animation(currentKey) {
      $("." + currentKey).toggleClass("pressed");
      setTimeout(function() {
        $("." + currentKey).toggleClass("pressed");
      }, 75);
    }
