((SampleApp, $) => {

    $(() => {
        // Add the app element to the DOM
        $('#reverse-app').append('<button class="btn btn-primary" id="reverse" type="submit">Reverse</button>');
    });

    $(() => {

        $('#reverse').click(event => {
            // Prevent the default behavior (submitting the form)
            event.preventDefault();

            // Get the message from the form
            const message = SampleApp.getMessage();

            // Send the AJAX request
            SampleApp.handleRequest(`${SampleApp.config.baseurl}/reverse/?message=${message}`);
        });

    });

})(this.SampleApp, jQuery);