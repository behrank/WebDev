const mail = document.getElementById('posta')
const pass = document.getElementById('sifre')
function myFunction() {

    if (mail.value == '' && pass.value == '') {
        alert("email ve sifre alanı boş")
    } else if (pass.value == '' || pass.value == null) {

        alert("şifre alanı boş")
    } else if (mail.value == '' || mail.value == null) {

        alert("email alanı boş")
    }
}

