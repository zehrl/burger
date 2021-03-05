$(function() {
    // Elements
    let $burgerInput = $("#burger-input")

    // Values
    let burgerInput = $burgerInput.val()



    // Submit burger
        // handle inserting data into burgers_db
        // clear entry box
    $("#burger-form").submit(function(event) {
        event.preventDefault();

        console.log(`burgerInput = ${burgerInput}`)
    })


    // Consume burger
        // handle deleting entry in burgers_db
        // render "Ready to Eat Burgers" list items

    // Reset consumed burgers
        // handle deleting all entries if burgers are consumed
        // render "Consumed Burgers" list items

});

// $(".change-sleep").on("click", function(event) {
//   var id = $(this).data("id");
//   var newSleep = $(this).data("newsleep");

//   var newSleepState = {
//     sleepy: newSleep
//   };

//   // Send the PUT request.
//   $.ajax("/api/cats/" + id, {
//     type: "PUT",
//     data: newSleepState
//   }).then(
//     function() {
//       console.log("changed sleep to", newSleep);
//       // Reload the page to get the updated list
//       location.reload();
//     }
//   );
// });

// $(".create-form").on("submit", function(event) {
//   // Make sure to preventDefault on a submit event.
//   event.preventDefault();

//   var newCat = {
//     name: $("#ca").val().trim(),
//     sleepy: $("[name=sleepy]:checked").val().trim()
//   };

//   // Send the POST request.
//   $.ajax("/api/cats", {
//     type: "POST",
//     data: newCat
//   }).then(
//     function() {
//       console.log("created new cat");
//       // Reload the page to get the updated list
//       location.reload();
//     }
//   );
// });