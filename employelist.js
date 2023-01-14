var employers = JSON.parse(localStorage.getItem('employees-list')) || []

function list() {
    var tbody = document.getElementById('tbody')
    employers.map((element, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${element.nom}</td>
            <td>${element.prenom}</td>
            <td>${element.email}</td>
            <td>${element.adress}</td>
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

    employers.splice(i, 1)

    localStorage.setItem('employees-list', JSON.stringify(employers))
    window.location.reload()
}

var nom = document.getElementById('nom')
var prenom = document.getElementById('prenom')
var email = document.getElementById('email')
var adress = document.getElementById('address')
var index = 0
function loadData(i) {
    nom.value = employers[i].nom
    prenom.value = employers[i].prenom
    email.value = employers[i].email
    adress.value = employers[i].adress
    index = i
}

function saveChanges() {

    var data = {
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        adress: adress.value,
    }
    companies.splice(index,1,data);
    localStorage.setItem('employees-list',JSON.stringify(employers))
    window.location.reload()
}