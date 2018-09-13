$(function() {
    // Devour button
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var devouredBurger = {
            devoured: true
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