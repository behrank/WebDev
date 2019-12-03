const mail = document.getElementById('posta')
const pass = document.getElementById('sifre')
function myFunction() {
    //bunları buttonda sadece validation yapıldığı için koydum. Statusu hata varsa göstersin diye.
    document.getElementById("alert-modal").classList.remove("alert-success");
    document.getElementById("alert-modal").classList.add("alert-danger");
    //

    document.getElementById("alert-modal").classList.add("hide");

    if (mail.value == '' && pass.value == '') {
        updateAlertModel("email ve sifre alanı boş");
    } else if (pass.value == '' || pass.value == null) {
        updateAlertModel("şifre alanı boş");
    } else if (mail.value == '' || mail.value == null) {
        updateAlertModel("email alanı boş");
    } else {
        //Success
        setLoginSuccess()
    }
}
function updateAlertModel(text) {
    document.getElementById("alert-modal").classList.remove("hide");
    document.getElementById("alert-modal").innerHTML = text;
}
function setLoginSuccess() {
    document.getElementById("alert-modal").classList.remove("alert-danger");
    document.getElementById("alert-modal").classList.remove("hide");
    document.getElementById("alert-modal").classList.add("alert-success");
    document.getElementById("alert-modal").innerHTML = "Herşey başarılı.";
}

function postData(event){
    event.preventDefault();

    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers : new Headers(),
        body:JSON.stringify({email:mail, password:pass})
    }).then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=>console.log(err))
}




