document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;


    if (email === 'nasirahsan520@gmail.com' && password === '520') {
        alert('Yaaaahh!!!.. You Can Get Money Now')
        window.location.href = "bank.html"
        alert('Yaaaahh!!!.. You Can Get Money Now')
    }
    else {
        alert('Sob vule gesis Taka Pabi na tui')
    }
    console.log(email, password)
})