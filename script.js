// STEP 1: Wrap the entire content of script.js inside an IIFE
(function () {
  // STEP 2: Create an array of names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 3: Write a function for 'Goodbye' and 'Hello' logic
  // SayGoodbye object
  var sayGoodbye = {
    speak: function (name) {
      console.log("Goodbye " + name);
    },
  };

  // SayHello object
  var sayHello = {
    speak: function (name) {
      console.log("Hello " + name);
    },
  };

  // STEP 4: Loop over the names array and use appropriate function
  for (var i = 0; i < names.length; i++) {
    // Retrieve the first letter of the name
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Check if the first letter is 'j'
    if (firstLetter === "j") {
      sayGoodbye.speak(names[i]);
    } else {
      sayHello.speak(names[i]);
    }
  }
})();
