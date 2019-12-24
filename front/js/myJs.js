

function validateLogin(){
    var login = $('#login');
    var password = $('#password');
    var submit = $('#submit');
    var validLogin = $('#loginValid');
    var validPassword = $('#passwordValid');
    if (validationOfLogin(login, validLogin) && validationOfPasswordLogin(password, validPassword)) {
        submit.attr('disabled', false);
    } else {
        submit.attr('disabled', true);
    }
};



function validationOfLogin(login, validLogin) {
    if (login.val().length > 0) {
        validLogin.text("");
        return true;
    }else {
        validLogin.text("Это поле не может быть пустым");
        return false;
    }
}

function validationOfPasswordLogin(password, validPassword) {
    if (password.val().length > 0) {
        validPassword.text("");
        return true;
    } else {
        validPassword.text("Это поле не может быть пустым");
        return false;
    }


}