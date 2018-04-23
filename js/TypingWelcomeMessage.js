// Random integer function taken from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const TypingWelcomeMessage = function TypingWelcomeMessage(text)  {
  let typingAnimationTime = 200;
  let msgElem = document.createElement("h1");  
  document.body.getElementsByTagName('header')[0].insertBefore(msgElem, document.body.nextSibling);
  //document.body.insertBefore(msgElem, document.body.nextSibling);


  let textLength = 1;
  const displayTextTimeoutHandler = function displayTextTimeoutHandler(){ 
    // This sound comes from ddohler on freesound.org.
    // It is licensed as CC1
    // https://freesound.org/people/ddohler/sounds/9098/
    if (msgElem.innerHTML !== text) {
      //let typingSound = new Audio('./resources/9098__ddohler__typewriter.wav');
      let typingSound = new Audio('https://incolor.photos/codepen/TypingDemo/resources/9098__ddohler__typewriter.wav');
      typingSound.play();
      msgElem.innerHTML = text.substr(0, textLength++);
      setTimeout(displayTextTimeoutHandler, typingAnimationTime);
    }
    else {
      // Bell sound is licenses as CC0
      // https://freesound.org/people/ramsamba/sounds/318687/
      //let bellSound = new Audio('./resources/318687__ramsamba__typewriter-bell.wav')
      let bellSound = new Audio('https://incolor.photos/codepen/TypingDemo/resources/318687__ramsamba__typewriter-bell.wav')
      bellSound.play();
    }
  };

  setTimeout(displayTextTimeoutHandler, typingAnimationTime);
 
  this.resetButton = document.createElement("button");
  this.resetButton.innerHTML = "Reset";
  // attach event listener to the button 
  this.resetButton.addEventListener('click', function resetButtonClickEventListener(e) {
    if (e.target && e.target.nodeName === 'BUTTON') {
      console.log("Reset Clicked");
      msgElem.innerHTML = "";
      textLength = 1;
      setTimeout(displayTextTimeoutHandler, typingAnimationTime);
    }
  });

  document.body.insertBefore(this.resetButton, document.body.nextSibling);

  // let numFrames = 0;
  // window.requestAnimationFrame(function draw() { 

  //   //Draw circle every 10 frames
  //   numFrames++;
  //   if (numFrames % 10 === 1) {
  //     let r = getRandomIntInclusive(0, 255);
  //     let g = getRandomIntInclusive(0, 255);
  //     let b = getRandomIntInclusive(0, 255);
  //     let x = getRandomIntInclusive(0, 599);
  //     let y = getRandomIntInclusive(0, 599);
  //     let a = getRandomIntInclusive(0, 255);
  //     let radius = getRandomIntInclusive(10, 100);

  //     ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
  //     ctx.beginPath();
  //     ctx.arc(x, y, radius, 0, Math.PI * 2, true); // Outer circle
  //     ctx.fill();
  //   } // if

  //   window.requestAnimationFrame(draw);
  // });
} //CirclesRandomColorAnimation


// Allow inclusion in browers and node
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    TypingWelcomeMessage,
  };
} else {
  window.TypingWelcomeMessage = TypingWelcomeMessage;

  window.onload = function onload() {
    window.twm = new TypingWelcomeMessage("I am a writer. Welcome to my webpage.");
  };
} //else