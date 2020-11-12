 fetch('http://localhost:3000/api/cameras').then(response =>
response.json())
.then(products => {
  console.log(products) 
  return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              if (request.status === 200) {
                  resolve(JSON.parse(request.responseText));
                  for (let i = 0; i < products.length; i++) {
      allProducts.innerHTML +=
        `<article class="products card col-lg-4 m-5">
<img class="image card-img-top p-3" src="${products[i].imageUrl}" alt="Camera ${products[i].name}" title="Camera ${products[i].name}">
<div class="card-body">
<h3 class="product card-title">${products[i].name}</h3>
<p class="price card-text">${products[i].price / 100} €</p>
<button class="btn btn-light" type="button"><a href="./pages/produit.html?id=${products[i]._id}">Voir Produit</a> </button>
</div>
</article>`
      console.log('Bravo ! Vous êtes connecté au serveur !');
    }
    // Why ?........
              } else {
                  reject(console.log('erreur :' + error));
              }
          }
          
      };
      request.open("GET", 'http://localhost:3000/api/cameras');
      request.send();
  });
});
