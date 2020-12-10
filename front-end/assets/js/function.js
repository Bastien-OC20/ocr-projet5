//* API---------------------------------------------------------------------------
let url = 'https://oc-p5-api.herokuapp.com/api/cameras'

//* Récupération des données à l'aide de Promise---------------------------------
async function get(url) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200)
                    resolve(request.responseText)
                else
                    reject(request);
            }
        }
        request.open('GET', url, true)
        request.send()
    })
};

// * Gestion des erreur------------------------------------------------------------
function catchError(error) {
    console.error('Erreur de connexion', error);
    window.alert("Un problème est survenu. Veuillez réessayer ultérieurement ou contacter un administrateur.");
};
function catchErrorFunc(error) {
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
};

//* Fonction de formatage du prix---------------------------------------------------
function formatPrix(prix) {
    let resultat = prix / 100
    new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(resultat)
    return resultat
};

//* function selection des lentilles-----------------------------------------------
function selectLenses(lense, index) {
    let option = document.createElement("option")
    let selectLense = document.getElementById('option')
    selectLense.appendChild(option)
    let addlense = document.createElement('a', 'id', index)
    option.appendChild(addlense)
    option.setAttribute("value", "Type de lentille")
    option.setAttribute('class', 'lense')
    addlense.textContent = lense
    console.log("Lentille disponible : " + lense)
}

//* Création du panier utilisateur------------------------------------------------
if (localStorage.getItem("panier")) {
    console.log("Panier OK");
} else {
    console.log("Création du panier");
    let init = [];
    localStorage.setItem("panier", (JSON.stringify(init)));
}

//* stockage de panier dans la variable panier--------------------------------------
let panier = JSON.parse(localStorage.getItem("panier"));

//* Affichant du nombre d'article dans la barre de navigation sous l'onglet panier---
function nombreArticle() {
    let numberArticle = document.getElementById("nbrArticle")
    numberArticle.textContent = panier.length + " article(s)"
}
nombreArticle()

//* Fonction de suppression d'article du panier-------------------------------------
function suppressionArticle(i) {
    alert("suppression de l'article ", i)
    panier.splice(i, 1) //suppression   
    localStorage.clear() //vidange du storage
    localStorage.setItem("panier", JSON.stringify(panier)) //maj du panier 
    window.location.reload()
}

//* Fonction pour le coût Total du panier-------------------------------------------
function finalCost(total) {
    cart_json.forEach(priceArticle => {
        let tableCartFootTotalCost = document.getElementById("TotalCost")
        total += formatPrix(priceArticle.price)
        tableCartFootTotalCost.textContent = "Montant total de votre commande : " + total + "€"
    })
    console.log("Montant total du manier : " + total + "€")
}

// function addedLense(a){

//     console.log("ajout de cette lentille : ", a)
//     panier.push(a,1)
//     alert("le choix de la lentille a bien été ajouté.")
//     localStorage.setItem("panier", JSON.stringify(panier)) //maj du panier 
//     window.location.reload()
// }

