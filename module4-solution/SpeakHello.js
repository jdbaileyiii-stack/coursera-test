// STEP 2: Wrap the code inside an IIFE so it doesn't pollute the global scope
(function (window) {

  // STEP 3: Create the helloSpeaker object
  var speakWord = "Hello";
  var helloSpeaker = {};

  // STEP 4: Attach the speak function to helloSpeaker
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);

// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
