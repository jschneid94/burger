$(function() {
    // If devour button is pressed on a requested burger
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
});