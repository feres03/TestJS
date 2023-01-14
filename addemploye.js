function employer(){
    var employers = JSON.parse(localStorage.getItem('employees-list')) || []
    console.log(employers)
var firstName = document.getElementById('nom')
var lastName = document.getElementById('prenom')
var Email = document.getElementById('email')
var Adress = document.getElementById('adress')

var validForm=true

    if (firstName.value == '') {
        firstName.classList.add('is-invalid')
        firstName.classList.remove('is-valid')

        validForm = false
    }
    else {
        firstName.classList.add('is-valid')
        firstName.classList.remove('is-invalid')
    }
    if (lastName.value == '') {
        lastName.classList.add('is-invalid')
        lastName.classList.remove('is-valid')

        validForm = false
    }
    else {
        lastName.classList.add('is-valid')
        lastName.classList.remove('is-invalid')
    }
    if (Email.value == '') {
        Email.classList.add('is-invalid')
        Email.classList.remove('is-valid')

        validForm = false
    }
    else {
        Email.classList.add('is-valid')
        Email.classList.remove('is-invalid')
    }
    if (Adress.value == '') {
        Adress.classList.add('is-invalid')
        Adress.classList.remove('is-valid')

        validForm = false
    }
    else {
        Adress.classList.add('is-valid')
        Adress.classList.remove('is-invalid')
    }

    if (validForm) {
        var data = {
            nom: firstName.value,
            prenom: lastName.value,
            email: Email.value,
            adress: Adress.value,
            
        }
    alert('Employé est ajouté avec succés')
    console.log(data)
    employers.push(data)
    console.log(employers)
    localStorage.setItem('employees-list',JSON.stringify(employers))
    window.location.href = 'employerslist.html'
    }
}