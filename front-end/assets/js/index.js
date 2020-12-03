//* Appel de l'API-------------------------------------------------------------
async function recupUrl() {

    fetch(url).then(response => response.json())
        .then(product => {
            return product;

        }).catch(catchError)
        .then(function (product) {
            try {
                affichageProduits(product)

            } catch (err) {
                catchErrorFunc(err)
            }
            return fetch(url)
        })
};


// * Gestion des erreur------------------------------------------------------------
let catchError = function (error) {
    console.error('Erreur de connexion', error);
    window.alert("Un problème est survenu. Veuillez réessayer ultérieurement <br> ou contacter un administrateur.");
};
let catchErrorFunc = function (error) {
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
};


recupUrl();




// * index.html : affichage des cameras---------------------------------------------
function affichageProduits(product) {

    for (let i = 0; i < product.length; i++) {
        console.log(product[i].name)
        //* Emplacement des données---------------------------------------------------------
        let myArticle = document.createElement('article')
        allProducts.appendChild(myArticle)

        //* Template : page camera----------------------------------------------------------
        let img = document.createElement('img')
        let H3 = document.createElement('h3')
        let P1 = document.createElement('p')
        let button = document.createElement('button')
        let link = document.createElement('a')

        //*  Affichage des données---------------------------------------------------------
        img.src = product[i].imageUrl
        H3.textContent = product[i].name
        P1.textContent = 'Prix: ' + (product[i].price / 100) + '€'
        button.textContent = 'Voir le produit'
        link.href = './pages/produit.html?id=' + product[i]._id

        //*  FlowChart-Hiérarchisation----------------------------------------------------
        myArticle.appendChild(img)
        myArticle.appendChild(H3)
        myArticle.appendChild(P1)
        myArticle.appendChild(link)
        link.appendChild(button)

        //*  Attibutions des class Bootstrap--------------------------------------------------
        myArticle.setAttribute('class', 'products card col-lg-4 p-3 m-5')
        img.setAttribute('class', 'image card-img-top p-3')
        img.setAttribute('title', product[i].name)
        H3.setAttribute('class', 'product card-title')
        P1.setAttribute('class', 'price card-text')
        button.setAttribute('class', 'btn btn-secondary w-50 border')
        link.setAttribute('class', 'text-center select')


    }

}

console.log("Connexion à l'API " + url)



