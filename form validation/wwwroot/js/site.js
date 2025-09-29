

$(document).ready(function() {
    $('#registration-form').submit(function(event) {
        event.preventDefault();
        
        $('.error').text('');
        
        let name = $('#username').val();
        if (name.trim() === '') {
            $('#username-error').text('Username is required.');
        }

        let password = $('#password').val();
        if (password.length < 8) {
            $('#password-error').text('Password must be at least 8 characters long.');
        }

        let confirmPassword = $('#confirmpassword').val();
        if (confirmPassword != password) {
            $('#confirmpassword-error').text('Passwords do not match.');
        }

        if ($('.error').text() === '') {
            alert('Login successful!');
        }

        $('#username').val('');
        $('#password').val('');
        $('#confirmpassword').val('');
    });
});