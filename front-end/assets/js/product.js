//Récupère lien get
let link = location.href;

//récupère id
let cameraId = link.split('=')[1];

let element = {};

//affichage du produit
fetch('http://localhost:3000/api/cameras')
    .then(response => response.json())
    .then(cameraProduct => {
        const product = document.querySelector('#product');

        for (let i = 0; i < cameraProduct.length; i++) {
            if (cameraProduct[i]._id == cameraId) {
                element._id = cameraProduct[i]._id;
                element.name = cameraProduct[i].name;
                element.lense = cameraProduct[i].lenses;
                element.price = cameraProduct[i].price / 100;
                element.url = cameraProduct[i].imageUrl;
                product.innerHTML +=
                    `<article class="cameraProduct col-lg-8 card ">
      <img class="productImage card-img-top p-3" src="${cameraProduct[i].imageUrl}">
        <div class="card-body">
        <h3 class="productName card-title p-2">${cameraProduct[i].name}
        </h3>
        <div class="productDescription card-text p-2">
        <strong>Description : </strong>
        </br>${cameraProduct[i].description}
        </div>
        <div>
        <a class="btn btn-primary dropdown-toggle data-toggle=dropdown"> Sélectionnez une taille de lentille : <span class="caret"></span></a>
        <ul class="dropdown-menu">
<li class="dropdown-item">${cameraProduct[i++].lenses}</li>

</ul>
        </div>
        <div class="productPrice card-text p-2">
        <h4>Prix : <span>${cameraProduct[i].price / 100} € </span></h4>
        </div>
        <div class="allBtn">
          <button class="btn"><a href="../index.html">Retour</a></button>
          <button class="btn" id="panier"><a href="../pages/basket.html">Ajouter au panier</a></button>
          </div>
          </div>
        </article>`

            }
            }
        });