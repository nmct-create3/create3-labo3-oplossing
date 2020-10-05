function handleFloatingLabel() {
    let input = document.querySelector('.js-floating-input'),
        label = document.querySelector('.js-floating-label');

    input.addEventListener('blur', function () {
        console.log(event);
        if (input.value) {
            label.classList.add('is-floating');
        } else {
            label.classList.remove('is-floating');
        }
    });
}

function handlePasswordSwitcher() {
    let passwordInput = document.querySelector('.js-password-input'),
        passwordCheckbox = document.querySelector('.js-password-toggle-checkbox');

    passwordCheckbox.addEventListener('click', function () {
        if (passwordInput.type == 'password') {
            passwordInput.type = 'input';
        } else {
            passwordInput.type = 'password';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});