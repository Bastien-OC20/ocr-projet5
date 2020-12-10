//*Création de la variable contenant l'id--------------------------------------------
let urlProduit = new URL(window.location.href)
urlProduit = (urlProduit.searchParams.get("id"))
console.log(urlProduit)

//* Récupération des données du produit séléctionné----------------------------------
if (urlProduit) {
    get(url + '/' + urlProduit).then(function (response) {
        let camera = JSON.parse(response);
        return camera
    }).catch(catchError)
        .then(function (camera) {
            try {
                affichageCamera(camera)
            } catch (err) {
                catchErrorFunc(err);
            }
            return fetch(url + '/' + urlProduit)
        })
}

function affichageCamera(camera) {
    console.log("Nom de l'article : " + camera.name)

    //* Emplacement des données----------------------------------------------------------
    let myArticle = document.createElement('article')
    cameraProduct.appendChild(myArticle)

    //* Template : page camera----------------------------------------------------------
    let img = document.createElement('img')
    let div1 = document.createElement('div')
    let H3 = document.createElement('h3')
    let div2 = document.createElement('div')
    let P1 = document.createElement('p')
    let Label = document.createElement('label')
    let H4 = document.createElement('h4')
    let Select = document.createElement('select')
    let allBtn = document.createElement('div')
    let btn1 = document.createElement('button')
    let btn2 = document.createElement('button')
    let link1 = document.createElement('a')
    let link2 = document.createElement('a')

    //*  Affichage des données--------------------------------------------------------
    img.src = camera.imageUrl
    H3.textContent = camera.name
    P1.textContent = "Prix: " + camera.description
    Label.textContent = " Choix de l'objectif :  "
    H4.textContent = formatPrix(camera.price) + '€'
    btn1.textContent = "Retour"
    btn2.textContent = "Ajouter au panier"
    link1.href = '../index.html'
    link2.href = "../pages/basket.html"

    //* Ecoute événement click---------------------------------------------------------
    link1.addEventListener('click', function () {
        if (panier == 0) {
            alert('Vous n\'avez rien ajouter à votre panier. Retour sur la page d\'accueil')
        }
    })

    //* Panier : écoute de donnée 
    link2.addEventListener("click", async function () {
        panier.push(camera);
        localStorage.setItem("panier", JSON.stringify(panier));
        alert("L'article a bien été ajouté à votre panier.")
        location.reload();
    })

    //*  Attibutions des class Bootstrap------------------------------------------------
    myArticle.setAttribute('class', 'cameraProduct col-lg-8 card')
    img.setAttribute('class', 'image card-img-top p-3')
    div1.setAttribute('class', 'card-body')
    H3.setAttribute('class', 'card-title display-4')
    div2.setAttribute('class', 'card-text p-2')
    P1.setAttribute('class', 'blockquote')
    Label.setAttribute('class', 'select p-2 ')
    Select.setAttribute('id', 'option')
    allBtn.setAttribute('class', 'allBtn')
    btn1.setAttribute('class', 'btn btn-light border border-warning p-2 mr-2')
    btn2.setAttribute('class', 'btn btn-light border border-info p-2 ml-2')
    link1.setAttribute('class', 'text-center select')
    link2.setAttribute('class', 'text-center select')
    link2.setAttribute('id', 'addCart')

    //*  FlowChart-Hiérarchisation------------------------------------------------------
    myArticle.appendChild(img)
    myArticle.appendChild(div1)
    div1.appendChild(H3)
    div1.appendChild(div2)
    div2.appendChild(P1)
    div2.appendChild(Label)
    Label.appendChild(H4)
    Label.appendChild(Select)
    div2.appendChild(H4)
    div2.appendChild(Label)
    div1.appendChild(allBtn)
    allBtn.appendChild(link1)
    allBtn.appendChild(link2)
    link1.appendChild(btn1)
    link2.appendChild(btn2)

    //*  Choix des lentilles------------------------------------------
    camera.lenses.forEach(lense => {
        selectLenses(lense)
    })
}
nombreArticle()



