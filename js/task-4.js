const refs = {
    loginForm: document.querySelector('.login-form'),
}

refs.loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = {
        [refs.loginForm.email.name]: refs.loginForm.email.value.trim(),
        [refs.loginForm.password.name]: refs.loginForm.password.value.trim(),
    }

    const isEmptyField = Object.values(formData).some(value => value === '');

    if (isEmptyField) {
        alert('All form fields must be filled in');
        return;
    }

    console.log(formData);

    refs.loginForm.reset();
});
