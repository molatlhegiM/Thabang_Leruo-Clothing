R(function () {

    R("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function (Rform, event, errors) {
        },
        submitSuccess: function (Rform, event) {
            event.preventDefault();
            var name = R("input#name").val();
            var email = R("input#email").val();
            var subject = R("input#subject").val();
            var message = R("textarea#message").val();

            Rthis = R("#sendMessageButton");
            Rthis.prop("disabled", true);

            R.ajax({
                url: "contact.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                },
                cache: false,
                success: function () {
                    R('#success').html("<div class='alert alert-success'>");
                    R('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    R('#success > .alert-success')
                            .append("<strong>Your message has been sent. </strong>");
                    R('#success > .alert-success')
                            .append('</div>');
                    R('#contactForm').trigger("reset");
                },
                error: function () {
                    R('#success').html("<div class='alert alert-danger'>");
                    R('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    R('#success > .alert-danger').append(R("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                    R('#success > .alert-danger').append('</div>');
                    R('#contactForm').trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        Rthis.prop("disabled", false);
                    }, 1000);
                }
            });
        },
        filter: function () {
            return R(this).is(":visible");
        },
    });

    R("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        R(this).tab("show");
    });
});

R('#name').focus(function () {
    R('#success').html('');
});
