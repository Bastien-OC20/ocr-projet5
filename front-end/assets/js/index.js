// Récupération des produits sur l'API

fetch ('http://localhost:3000/api/cameras')
.then(response => response.json())
    .then(products => {
      if(products) {
        const allProducts = document.querySelector('#allProducts');
            for (let i = 0; i < products.length; i++) {
                allProducts.innerHTML +=
                    `<article class="products card col-lg-4 m-5">
    <img class="image card-img-top p-3" src="${products[i].imageUrl}" alt="Camera ${products[i].name}" title="Camera ${products[i].name}">
      <div class="card-body">
      <h3 class="product card-title">${products[i].name}</h3>
      <p class="description card-text">${products[i].description}</p>
      <p class="price card-text">${products[i].price / 100} €</p>
      <button class="btn btn-light" type="button"><a href="./pages/produit.html?id=${products[i]._id}">Voir Produit</a> </button>
      </div>
    </article>`
            console.log('Bravo ! Vous êtes connecté au serveur !');
            }
          } else{
            console.log('Mauvaise reponse du reseau !');
          }
        })
        .catch((error) => {
          allProducts.innerHTML +=
                    `<article class="card col-lg-8 p-1">
                    <h3 class="text-center">Connectez vous au serveur</h3>
                    <h4>Installation :</h4
    <p>Clonez<a href="https://github.com/OpenClassrooms-Student-Center/JWDP5.git">https://github.com/OpenClassrooms-Student-Center/JWDP5.git</a>
    sur votre ordinateur.</p>
    <p>Pour lancer le serveur sur votre ordinateur vous devez d'abord vous placer avec l'invite de commande (CMD) sur le dossier 'back-end'.</p>
    <p>Ensuite lancez le serveur en tapant <strong>'node server'</strong>.</p>
    <p>Si tout est bien installé vous devriez voir apparaître Listening on port 3000 & Succesfully connected to MongoDB Atlas.</p>
    <p>Ouvrir votre navigateur à l'adresse http://localhost:300/</p>
    <p>vérifiez si les URl des API fonnctionnent</p>
                    </article>`
            console.log('Vous n\'êtes pas connecté au serveur !'+error.message);
          });