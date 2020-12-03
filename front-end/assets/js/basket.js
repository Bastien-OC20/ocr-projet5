



//* tableau bootstrap----------------------------------------------------------
// <table class="table">
//     <thead>
//         <tr>
//             <th>img</th>
//             <th scope="col">Article</th>
//             <th scope="col">quantité</th>
//             <th scope="col">prix</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <th scope="row">1</th>
//             <td>produit</td>
//             <td>quantité</td>
//             <td>prix </td>
//         </tr>
//         <tr>
//             <th scope="row">2</th>
//             <td>produit</td>
//             <td>quantité</td>
//             <td>prix </td>
//         </tr>
//         <tr>
//             <th scope="row">2</th>
//             <td>produit</td>
//             <td>quantité</td>
//             <td>prix </td>
//         </tr>
//     </tbody>
//     <tfooter>
//         <th scope="row">total</th>
//         <td>Nbr de produits</td>
//         <td>somme totale</td>
//     </tfooter>
// </table>




function createTab() {
    //* Emplacement des données----------------------------------------------------------
    let myArticle = document.createElement('article')
    basketProduct.appendChild(myArticle)

    //* Template : page camera----------------------------------------------------------
    let tableau = document.createElement('table')
    let tableauHead = document.createElement('thead')
    let tableauHeadTitle = document.createElement('tr')
    let tableauLigne = document.createElement('th')
    let tableauBody = document.createElement('tbody')
    let tableauArticle = document.createElement('td')
    let tableauFooter = document.createElement('tfooter')

    //*  Affichage des données--------------------------------------------------------
    img.src = article.imageUrl
    tr.textContent = article.imageUrl + article.name
}