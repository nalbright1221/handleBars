// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".chugItButton").on("click", function(event) {
      var id = $(this).attr("drinkID");
      console.log(id);
      var newDrink = $(this).data("newdrink");
  
      var newDrunkState = {
        drunk: newDrink
      };
  
      // Send the PUT request.
      $.ajax("/api/drinks/" + id, {
        type: "PUT",
        data: newDrunkState
      }).then(
        function() {
          console.log("changed drink to", newDrink);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#createNewDrink").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBeverage = {
        drink_name: $("#ca").val().trim(),
        chugIt: 0
      };
  
      // Send the POST request.
      $.ajax("/api/drinks/", {
        type: "POST",
        data: newBeverage
      }).then(
        function() {
          console.log("created new drink");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });