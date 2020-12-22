//* Fonction affichage produit -------------------------------------------------------
function affichagePanier() {
    //* Récupération du produit dans le localStorage "panier"
    let panier = JSON.parse(localStorage.getItem("panier"))
    let prixTotal = JSON.parse(localStorage.getItem("prixTotal"))
    let prixPanier = document.getElementById('affichageTotal')
    let tableauPanier = document.getElementById("afficheProduitPanier")

    //* affichage du prix total du panier------------------------------------------
    if (prixTotal != null) {

        let div = document.createElement("div")
        afficheProduitPanier.appendChild(div)
        prixPanier.textContent = 'Le montant total de votre commande est de : ' + prixTotal + ' €';
        prixPanier.id = 'prixTotal'


    } else {
        prixPanier.textContent = 'Le montant de votre commande est de : 0 €'
    }


    if (panier == null) {
        let div = document.createElement("div")
        afficheProduitPanier.appendChild(div)
        console.log("Le panier est vide")

    } else {
        tableauPanier.innerHTML = ''
        Object.values(panier).map((camera) => {

            let tr = document.createElement("tr")
            let name = document.createElement("td")
            let lenses = document.createElement("td")
            let quantite = document.createElement("td")
            let prix = document.createElement("td")
            let prixTotalCam = document.createElement("td")

            afficheProduitPanier.appendChild(tr)
            tr.appendChild(name)
            tr.appendChild(lenses)
            tr.appendChild(quantite)
            tr.appendChild(prix)
            tr.appendChild(prixTotalCam)

            name.textContent = camera.name
            lenses.textContent = camera.lenses
            quantite.textContent = camera.quantity
            prix.textContent = camera.price / 100 + " €"
            prixTotalCam.textContent = camera.price / 100 * camera.quantity + " €"


            let emptyButton = document.getElementById("empty")

            emptyButton.addEventListener("click", function () {
                localStorage.clear("prixPanier")
                window.location.reload()
            })

            console.log("Contenu du panier : ")
            console.log(panier)
        })
    }
}
affichagePanier()




//* Variables d'informations client -------------------------------------------------
let orderButton = document.querySelector(".order-submit")
let validationButton = document.querySelector(".validation")
let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let eMail = document.querySelector("#inputEmail")
let telephoneNumber = document.querySelector("#telephoneNumber")
let address = document.querySelector("#inputAddress")
let city = document.querySelector("#inputCity")


//* Création de l'objet général client
function Client(firstName, lastName, eMail, telephoneNumber, address, city) {
    (this.firstName = firstName),
        (this.lastName = lastName),
        (this.eMail = eMail),
        (this.telephoneNumber = telephoneNumber),
        (this.address = address),
        (this.city = city);
}

//*création d'un tableau contenant les articles commandés------------------------
let panier = JSON.parse(localStorage.getItem("panier"))
let listIdProduct = []

function cart(panier){
for (let i = 0; i < panier.length; i++) {
    listIdProduct.push(panier[i].id)
}
}
localStorage.setItem("products", JSON.stringify(listIdProduct))
listIdProduct = localStorage.getItem("products")
listIdProduct = JSON.parse(listIdProduct)


//* fonction de validation des input---------------------------------------------
function validationInput() {
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    if (firstName.value.length === 0) {
        alert("Merci d'entrer un prénom valide.")
    } else if (lastName.value.length === 0) {
        alert("Merci d'entrer un nom valide.")
    } else if (eMail.value.length === 0 || !regexEmail.test(eMail.value)) {
        alert("Merci d'entrer une adresse email valide")
        eMail.style.borderColor = "red"
    } else if (address.value.length === 0) {
        alert("Merci d'entrer une adresse valide.")
    } else if (telephoneNumber.value.length === 0) {
        alert("Merci d'entrer un numéro valide.")
    } else if (city.value.length === 0) {
        alert("Merci d'entrer une ville valide.")
    } else {
        alert("Vous pouvez valider votre commande")
        validationButton.classList.remove("disabled")
        send() // Envoie au serveur
    }
}

//* function event au clic-----------------------------------------------------
orderButton.addEventListener("click", function (event) {
    event.preventDefault();
    validationInput()
})

//*création fonction send-----------------------------------------------------
function send() {
    // Création nouveau client
    let newClient = new Client(
        firstName.value,
        lastName.value,
        eMail.value,
        telephoneNumber.value,
        address.value,
        city.value
    );
    //* Fetch POST ----------------------------------------------------------------
    fetch("https://oc-p5-api.herokuapp.com/api/cameras/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contact: {
                firstName: newClient.firstName,
                lastName: newClient.lastName,
                address: newClient.address,
                city: newClient.city,
                email: newClient.eMail,
            },
            products: listIdProduct,
        }),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            localStorage.setItem("orderInfos", JSON.stringify(data))
        })
        .catch((error) => console.log("erreur de type : ", error))
}