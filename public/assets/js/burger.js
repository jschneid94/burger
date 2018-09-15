$(function() {
    // Devour button
    $("#burgerRequests").on("click", ".devour", function(event) {
        var id = $(this).data("id");
        var eaten = $(this).data("eaten");
        var devouredBurger = {
            devoured: eaten
        };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: devouredBurger
        }).then(function() {
            console.log(`Burger #${id} has been devoured!`);
            $("#burgerRequests").load(location.href + " #burgerRequests>*", "");
            $("#burgersEaten").load(location.href + " #burgersEaten>*", "");
        });
    });
    // Submit requested burger
    $(".requestBurger").on("click", "#submitBurger", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burgerName").val().trim(),
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            $("#burgerName").val("");
            console.log("Created a new burger!");
            $("#burgerRequests").load(location.href + " #burgerRequests>*", "");
            $("#burgersEaten").load(location.href + " #burgersEaten>*", "");
        });
    });
    // Delete devoured burger
    $("#burgersEaten").on("click", ".remove", function(event) {
        var id = $(this).data("id");
        $.ajax(`/api/burgers/${id}`, {
            type: "DELETE"
        }).then(function() {
            console.log(`Deleted burger #${id}`);
            $("#burgerRequests").load(location.href + " #burgerRequests>*", "");
            $("#burgersEaten").load(location.href + " #burgersEaten>*", "");
        }
        );
    });
});