var companies = JSON.parse(localStorage.getItem('Companies-list')) || []

function list() {
    var tbody = document.getElementById('tbody')
    companies.map((element, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${element.nom1}</td>
            <td>${element.adress1}</td>
            <td>${element.email1}</td>
            <td>${element.employers1}</td>
            <td><button onclick='loadData(${index})'type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Edit
          </button>
            <button onclick='supp(${index})' class="btn btn-danger btn-sm delete">Delete</button></td>
        </tr>
        `

    })
}
list()

function supp(i) {

    companies.splice(i, 1)

    localStorage.setItem('Companies-list', JSON.stringify(companies))
    window.location.reload()
}

var nom1 = document.getElementById('Nom')
var adress1 = document.getElementById('Address')
var email1 = document.getElementById('Email')
var employers1 = document.getElementById('Employees')
var index = 0
function loadData(i) {
    nom1.value = companies[i].nom1
    adress1.value = companies[i].adress1
    email1.value = companies[i].email1
    employers1.value = companies[i].employers1
    index = i
}

function saveChanges() {

    var data = {
        nom1: nom1.value,
        adress1: adress1.value,
        email1: email1.value,
        employers1: employers1.value,
    }
    companies.splice(index,1,data);
    localStorage.setItem('Companies-list',JSON.stringify(companies))
    window.location.reload()
}