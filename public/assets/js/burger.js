$(function() {
    // Devour button
    $("#burgerRequests").on("click", ".devour", function(event) {
        console.log("click")
        var id = $(this).data("id");
        var eaten = $(this).data("eaten");
        var devouredBurger = {
            devoured: eaten
        };

        $.ajax(`/api/burger/${id}`, {
            type: "PUT",
            data: devouredBurger
        }).then(function() {
            console.log(`Burger #${id} has been devoured!`);
            location.reload();
        });
    });
    // Submit requested burger
    $(".requestBurger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burgerName").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Created a new burger!");
            location.reload();
        });
    });
});