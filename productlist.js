const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
.then(function (res) {
    return res.json();
})
.then(function(data){
    handleProductList(data);
    })

function handleProductList(data) {
    data.forEach(showProduct);
}
// function showProduct(product) {

    
// }

// const template = document.querySelector("#smallProductTemplate").content;

// const copy = template.cloneNode(true);

// copy.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`;
// copy.querySelector("h3").textContent = product.productdisplayname;

// if(product.soldOut) {
//     copy.querySelector("article").classList.add("soldOut");
// }

// if(product.discount){
//     copy.querySelector("article").classList.add("onSale");
// }

const parent = document.querySelector("main");

parent.appendChild(copy);