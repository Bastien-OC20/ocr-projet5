//Récupère lien get
let link = location.href;

//récupère id
let cameraId = link.split('=')[1];

let element = {};


//affichage du produit
fetch('https://oc-p5-api.herokuapp.com/api/cameras')
.then(response =>response.json())
.then(camera => {
  console.log(camera) 
  return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              if (request.status === 200) {
                  resolve(JSON.parse(request.responseText));
                  for (let i = 0; i < camera.length; i++) {
                    let myArticle = document.createElement('article')
    Product.appendChild(myArticle) 

let img = document.createElement('img')
let H3 = document.createElement('h3')
let desc = document.createElement('p')
let P1 = document.createElement('p')
let lent = document.createElement ('label')
let option = document.createElement('select')
let button = document.createElement('button')
let link = document.createElement('a')

img.src = camera[i].imageUrl
H3.textContent =  camera[i].name
desc.textContent = camera[i].description
lent.textContent = 'choisir sa lentille'
option.textContent= camera[i].lenses
P1.textContent = 'Prix: '+ (camera[i].price / 100)+ '€'
button.textContent = 'ajouter au panier'
link.href = camera[i]._id

myArticle.appendChild(img)
myArticle.appendChild(H3)
myArticle.appendChild(P1)
lent.appendChild(label)
option.appendChild(select)
myArticle.appendChild(button)
button.appendChild(link)


myArticle.setAttribute('class', 'products card col-lg-4 p-3 m-5')
img.setAttribute('class', 'image card-img-top p-3')
img.setAttribute('title', camera[i].name)
H3.setAttribute('class', 'product card-title')
P1.setAttribute('class', 'price card-text')
button.setAttribute('class','btn btn-light w-50 m-auto')

}
}
          }
        }
    })
})
