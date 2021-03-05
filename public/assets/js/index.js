$(function () {
    // Element inits
    const $consumedToast = $('#consumed-toast');
    const $resetToast = $('#reset-toast');

    // Toast Inits
    $consumedToast.toast(true, true, 500)
    $resetToast.toast(true, true, 500)


    // Local Storage
    let burgerLS = window.localStorage;

    if (burgerLS.getItem("didConsume")) {
        $consumedToast.toast('show');
    }

    if (burgerLS.getItem("didReset")) {
        $resetToast.toast('show');
    }

    burgerLS.clear();

    // Disable submit button when there is no input
    $('#burger-input').keyup(function (event) {
        // Determine input value
        const burgerInputVal = $('#burger-input').val().trim();

        // If null or just spaces, then disable button
        if ((burgerInputVal === "") || (burgerInputVal.length > 64)) {
            $('#burger-submit-btn').attr('disabled', true);
            $('#burger-submit-btn').attr('aria-disabled', true);
        } else {
            console.log('Removing disabled class from button.')
            $('#burger-submit-btn').removeAttr('disabled');
            $('#burger-submit-btn').removeAttr('aria-disabled');

        }
    })

    // Submit burger
    $("#burger-form").submit(function (event) {
        event.preventDefault();

        const $burgerInput = $("#burger-input")

        const newBurger = {
            burgerName: $burgerInput.val().trim()
        }

        // handle inserting data into burgers_db
        $.ajax('/api/burger', {
            type: 'POST',
            data: newBurger
        })
            .then(() => {
                location.reload();
            })

    })


    // devoured burger
    $(".consume-btn").on("click", function (event) {
        const burgerId = $(this).data("id");

        $.ajax("/api/burger/devour/" + burgerId, {
            type: "PUT",
        }).then(() => {
            // update local storage to trigger toast on reload
            burgerLS.setItem('didConsume', true);

        })
            .then(() => {
                location.reload();
            });
    })

    // handle hiding entries in burgers_db
    $("#reset-btn").on("click", () => {
        $.ajax("/api/burger/devoured", {
            type: "PUT"
        }).then(() => {
            // update local storage to trigger toast on reload
            burgerLS.setItem('didReset', true);
        })
            .then(() => {
                location.reload();
            });
    })
});