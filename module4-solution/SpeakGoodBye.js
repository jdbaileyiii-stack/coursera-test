// STEP 6: Wrap this code in an IIFE and attach the byeSpeaker object
(function (window) {

  var speakWord = "Good Bye";
  var byeSpeaker = {};

  // STEP 7: Attach speak function to byeSpeaker
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 8: Expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
