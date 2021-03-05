$(function () {

    // Submit burger
    $("#burger-form").submit(function (event) {
        event.preventDefault();

        const $burgerInput = $("#burger-input")

        const newBurger = {
            burgerName: $burgerInput.val()
        }

        // handle inserting data into burgers_db
        $.ajax('/api/burger', {
            type: 'POST',
            data: newBurger
        })
            .then((res) => {
                location.reload();
            })

    })


    // devoured burger
    $(".consume-btn").on("click", function (event) {
        const burgerId = $(this).data("id");

        $.ajax("/api/burger/devour/" + burgerId, {
            type: "PUT",
        }).then(
            function () {
                location.reload();
            }
        );
    })

    // handle deleting entry in burgers_db
    $("#reset-btn").on("click", () => {
        $.ajax("/api/burger/devoured", {
            type: "DELETE"
        }).then(
            () => {
                location.reload();
            }
        )
    })

});