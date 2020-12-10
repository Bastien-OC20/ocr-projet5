//* Appel de l'API-------------------------------------------------------------
async function recupUrl() {
    get(url).then(function (response) {
        let product = JSON.parse(response)
        return product
    }).catch(catchError)
        .then(function (product) {
            try {
                affichageProduits(product)

            } catch (err) {
                catchErrorFunc(err)
            }
            return fetch(url)
        })
}
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
        P1.textContent = 'Prix: ' + formatPrix(product[i].price) + '€'
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
        img.setAttribute('class', 'image card-img-top p-3 img-fluid w-100')
        img.setAttribute('title', product[i].name)
        H3.setAttribute('class', 'product card-title')
        P1.setAttribute('class', 'price card-text')
        button.setAttribute('class', 'btn btn-secondary w-50 border')
        link.setAttribute('class', 'text-center select')
    }
}
nombreArticle(panier)
console.log("Connexion à l'API " + url)



