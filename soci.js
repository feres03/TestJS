function Company(){
    var companies = JSON.parse(localStorage.getItem('Companies-list')) || []
    console.log(companies)
var companyName = document.getElementById('Nom')
var email = document.getElementById('Email')
var adress = document.getElementById('Address')
var employers = document.getElementById('Employees')
var validForm=true

    if (companyName.value == '') {
        companyName.classList.add('is-invalid')
        companyName.classList.remove('is-valid')

        validForm = false
    }
    else {
        companyName.classList.add('is-valid')
        companyName.classList.remove('is-invalid')
    }
    if (email.value == '') {
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')

        validForm = false
    }
    else {
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
    }
    if (adress.value == '') {
        adress.classList.add('is-invalid')
        adress.classList.remove('is-valid')

        validForm = false
    }
    else {
        adress.classList.add('is-valid')
        adress.classList.remove('is-invalid')
    }
    if (employers.value == '') {
        employers.classList.add('is-invalid')
        employers.classList.remove('is-valid')

        validForm = false
    }
    else {
        employers.classList.add('is-valid')
        employers.classList.remove('is-invalid')
    }
    if (validForm) {
        var data = {
            nom1: companyName.value,
            email1: email.value,
            adress1: adress.value,
            employers1: employers.value,
        }
    alert('Societé est ajouté avec succés')
    console.log(data)
    companies.push(data)
    console.log(companies)
    localStorage.setItem('Companies-list',JSON.stringify(companies))
    window.location.href = 'societelist.html'
    }
}
