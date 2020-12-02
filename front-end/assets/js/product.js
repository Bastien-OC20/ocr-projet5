

//*Création de la variable contenant l'id
const params = new URLSearchParams(window.location.search);
let camId = params.get("id");

//*Appel du produit séléctionné
let mesVariables; 


//* Récupération des données du produit séléctionné
 function recupCamera(){
    fetch(url + '/' + camId).then(function(response){
        response.json().then(function(camera){
            mesVariables = camera;

//* Emplacement des données 
                let myArticle = document.createElement('article')
                cameraProduct.appendChild(myArticle)

//* Template : page camera
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



//*  Affichage des données
                    img.src = camera.imageUrl
                    H3.textContent = camera.name
                    P1.textContent = "Prix: " + camera.description
                    Label.textContent = " Choix de l'objectif :  "
                    H4.textContent = camera.price / 100 + '€'
                    btn1.textContent = "Retour"
                    btn2.textContent = "Ajouter au panier"
                    link1.href = '../index.html'
                    link2.href = "../pages/basket.html"



//*  Attibutions des class Bootstrap
                    myArticle.setAttribute('class', 'cameraProduct col-lg-8 card')
                    img.setAttribute('class', 'image card-img-top p-3')
                    div1.setAttribute('class', 'card-body')
                    H3.setAttribute('class', 'card-title display-4')
                    div2.setAttribute('class', 'card-text p-2')
                    P1.setAttribute('class', 'blockquote')
                    Label.setAttribute('class', 'select p-2 ')
                    Select.setAttribute('id', 'option')
                    allBtn.setAttribute('class', 'allBtn')
                    btn1.setAttribute('class', 'btn')
                    btn2.setAttribute('class', 'btn')
                    link1.setAttribute('class', 'text-center select')
                    link2.setAttribute('class', 'text-center select')


//*  FlowChart
                    myArticle.appendChild(img)
                    myArticle.appendChild(div1)
                    div1.appendChild(H3)
                    div1.appendChild(div2)
                    div2.appendChild(P1)
                    div2.appendChild(Label)
                    Label.appendChild(H4)
                    Label.appendChild(Select)
                    div2.appendChild(H4)
                    div1.appendChild(allBtn)
                    allBtn.appendChild(link1)
                    allBtn.appendChild(link2)
                    link1.appendChild(btn1)
                    link2.appendChild(btn2)



                    //*  Choix des lentilles 
                    let selectLense = document.getElementById('option')

                    camera.lenses.forEach(lense => {
                        let option = document.createElement("option");
                        selectLense.appendChild(option);
                option.setAttribute("value", "Type de lentille");
                option.textContent = lense;
                })

                    console.log(camera.name)
                    console.log(camera.lenses)
                })
            })
        }
        recupCamera()




