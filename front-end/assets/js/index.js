fetch('https://oc-p5-api.herokuapp.com/api/cameras')
.then(response =>response.json())
.then(products => {
  console.log(products) 
  return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              if (request.status === 200) {
                  resolve(JSON.parse(request.responseText));
                  for (let i = 0; i < products.length; i++) {
                    let myArticle = document.createElement('article')
    allProducts.appendChild(myArticle) 

let img = document.createElement('img')
let H3 = document.createElement('h3')
let P1 = document.createElement('p')
let button = document.createElement('button')
let link = document.createElement('a')

img.src = products[i].imageUrl
H3.textContent =  products[i].name
P1.textContent = 'Prix: '+ (products[i].price / 100)+ '€'
button.textContent = 'Voir le produit'
link.href = products[i]._id

myArticle.appendChild(img)
myArticle.appendChild(H3)
myArticle.appendChild(P1)
myArticle.appendChild(button)
button.appendChild(link)


myArticle.setAttribute('class', 'products card col-lg-4 p-3 m-5')
img.setAttribute('class', 'image card-img-top p-3')
img.setAttribute('title', products[i].name)
H3.setAttribute('class', 'product card-title')
P1.setAttribute('class', 'price card-text')
button.setAttribute('class','btn btn-light w-50 m-auto')

}
      console.log('connecté au serveur');
    
}
    // Why  error ?.....
              } else {
                  reject(console.log(error));
              }
          }
          
     
      request.open("GET",'https://oc-p5-api.herokuapp.com/api/cameras');
      request.send();
  })
  
})