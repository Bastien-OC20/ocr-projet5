//* API---------------------------------------------------------------------------
let url = 'https://oc-p5-api.herokuapp.com/api/cameras'



// function Nombre d'article dans le panier--------------------------------------

function nbrArticle() {
    let numberArticle = document.getElementById("nbrArticle");
    numberArticle.textContent = panier.length;
}




