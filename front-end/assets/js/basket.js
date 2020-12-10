//* Variables------------------------------------------------------------------------
let total = 0
let cart_json = JSON.parse(localStorage.getItem("panier"))

//* Création du tableau du panier ---------------------------------------------------

if (cart_json == 0) {
    //* Message panier vide -----------------------------------------------------------
    let emptyMessage = document.getElementById('panier')
    let message = document.createElement('p')
    emptyMessage.appendChild(message)
    message.setAttribute('class', 'justify-content-center text-center')
    message.innerHTML = "<h3>VOTRE PANIER EST VIDE </h3><br><a href='../index.html' ><button class='btn btn-light w-auto border'>Retour</a></button>"

} else {
    //* Titre de la page -------------------------------------------------------------
    let titleCart = document.getElementById('Cart')
    let title = document.createElement('h2')
    titleCart.appendChild(title)
    title.setAttribute('class', 'col justify-content-center text-center pb-5')
    title.textContent = "Votre panier contient " + panier.length + " article(s)"

    let table = document.getElementById("panier")
    //* Template du tableau -------------------------------------------------------
    let tableCart = document.createElement('table')
    let tableCartHead = document.createElement('thead')
    let tableCartHeadTitle = document.createElement('tr')
    let tableCartHeadImg = document.createElement("th")
    let tableCartHeadName = document.createElement("th")
    let tableCartHeadCost = document.createElement("th")
    let tableCartHeadOption = document.createElement("th")
    let tableCartFootTitle = document.createElement('tr')
    let tableCartFootTotal = document.createElement('td')
    let tableCartFootTotalCost = document.createElement('td')

    //*  Attibutions des class Bootstrap------------------------------------------------
    tableCart.setAttribute('class', 'table table-hover')
    tableCartHead.setAttribute('class', "thead-dark")
    tableCartHeadImg.setAttribute('scope', 'col')
    tableCartHeadName.setAttribute('scope', 'col')
    tableCartHeadCost.setAttribute('scope', 'col')
    tableCartHeadOption.setAttribute('scope', 'col')
    tableCartFootTotal.setAttribute("scope", "row")

    //*  FlowChart-Hiérarchisation------------------------------------------------------
    table.appendChild(tableCart)
    tableCart.appendChild(tableCartHead)
    tableCartHead.appendChild(tableCartHeadTitle)
    tableCartHeadTitle.appendChild(tableCartHeadImg)
    tableCartHeadTitle.appendChild(tableCartHeadName)
    tableCartHeadTitle.appendChild(tableCartHeadCost)
    tableCartHeadTitle.appendChild(tableCartHeadOption)


    //* Déclaration des titres des colonnes -------------------------------------------
    tableCartHeadImg.textContent = "Article(s)"
    tableCartHeadName.textContent = "Nom(s)"
    tableCartHeadCost.textContent = "Prix"
    tableCartHeadOption.textContent = "Option"

    //* Création du Template des articles --------------------------------------------
    cart_json.forEach((article, index) => {
        let articleBody = document.createElement('tbody')
        let articleBodyLigne = document.createElement("tr")
        let articleBodytitle = document.createElement('th')
        let articleBodyImg = document.createElement("img")
        let articleBodyNom = document.createElement("td")
        let articleBodyPrix = document.createElement("td")
        let articleBodyOption = document.createElement("td")
        let bodyOption = document.createElement("i", "id", index)

        // *Attributs suplémentaires --------------------------------------------------
        articleBodytitle.setAttribute('scope', 'row')
        articleBodyImg.setAttribute("class", 'p-2')
        articleBodyImg.setAttribute('style', 'width: 8em')
        articleBodyOption.setAttribute('class', 'text-center')
        bodyOption.setAttribute("alt", "Retirer l'article du panier.")
        bodyOption.setAttribute("class", "fas fa-trash")
        tableCartFootTitle.setAttribute('scope', 'row')
        tableCartFootTitle.setAttribute('class', 'table-info ')
        tableCartFootTotal.setAttribute('id', 'TotalCost')
        tableCartFootTotal.setAttribute('colspan', '4')
        tableCartFootTotal.setAttribute('class', 'text-right font-weight-bold')

        //* Suppression de l'article ------------------------------------------------
        bodyOption.addEventListener("click", function (event) {
            suppressionArticle(event.target.id)
        })

        //*  FlowChart-Hiérarchisation------------------------------------------------------
        tableCart.appendChild(articleBody)
        articleBody.appendChild(articleBodyLigne)
        articleBodyLigne.appendChild(articleBodytitle)
        articleBodytitle.appendChild(articleBodyImg)
        articleBodyLigne.appendChild(articleBodyNom)
        articleBodyLigne.appendChild(articleBodyPrix)
        articleBodyLigne.appendChild(articleBodyOption)
        articleBodyOption.appendChild(bodyOption)
        tableCart.appendChild(tableCartFootTitle)
        tableCartFootTitle.appendChild(tableCartFootTotal)
        tableCartFootTotal.appendChild(tableCartFootTotalCost)

        //* Attribution des données aux élements créees -------------------------------
        articleBodyImg.src = article.imageUrl
        articleBodyNom.innerHTML = '<h4>Model : ' + article.name + '</h4>'
        articleBodyPrix.textContent = formatPrix(article.price) + '€'
        finalCost(total)
    })
}




