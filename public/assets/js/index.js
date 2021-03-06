$(function () {
    // Element inits
    const $consumedToast = $('#consumed-toast');
    const $resetToast = $('#reset-toast');
    const $burgerInput = $('#burger-input');
    const $burgerSubmitBtn = $('#burger-submit-btn');

    // Toast Inits
    $consumedToast.toast(true, true, 500);
    $resetToast.toast(true, true, 500);

    // Local Storage - used to handle toasts
    let burgerLS = window.localStorage;

    if (burgerLS.getItem("didConsume")) {
        $consumedToast.toast('show');
    }

    if (burgerLS.getItem("didReset")) {
        $resetToast.toast('show');
    }

    // Clear local storage after toast is displayed
    burgerLS.clear();

    // Disable submit button when there is no input
    $burgerInput.keyup(function (event) {
        // Determine input value
        const burgerInputVal = $burgerInput.val().trim();

        // If null or just spaces, then disable button
        if ((burgerInputVal === "") || (burgerInputVal.length > 64)) {
            $burgerSubmitBtn.attr('disabled', true);
            $burgerSubmitBtn.attr('aria-disabled', true);
        } else {
            $burgerSubmitBtn.removeAttr('disabled');
            $burgerSubmitBtn.removeAttr('aria-disabled');

        }
    })

    // Submit burger
    $("#burger-form").submit(function (event) {
        event.preventDefault();

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

    // handle hiding entries in database
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