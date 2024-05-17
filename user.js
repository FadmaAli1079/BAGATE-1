function toggleForm(formType) {
    const formTitle = document.getElementById('form-title');
    const form = document.getElementById('form');

    if (formType === 'sign-in') {
        formTitle.textContent = 'Sign In';
        form.action = '#'; // Add the sign-in form action
    } else if (formType === 'sign-up') {
        formTitle.textContent = 'Sign Up';
        form.action = '#'; // Add the sign-up form action
    }
}
