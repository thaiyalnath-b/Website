const product_elements = [
    // Fake Products Array

    {
        id: 1,
        title: "Colgate",
        price: 82,
        mrp: 82,
        img: 'colgate.jpg'
    },
    {
        id: 2,
        title: "RC Car",
        mrp: 1000,
        price: 900,
        img: 'rccar.jpg'
    },
    {
        id: 3,
        title: "Water Gun",
        mrp: 1500,
        price: 1400,
        img: 'gun.jpg'
    },
    {
        id: 4,
        title: "Bucket",
        mrp: 127,
        price: 127,
        img: 'bc.jpg'
    },
    {
        id: 5,
        title: "Bag",
        price: 700,
        mrp: 800,
        img: 'bags.jpg'
    },
     {
        id: 6,
        title: "Ear Buds",
        price: 1500,
        mrp: 1600,
        img: 'buds.jpg'
    },
];

const products_container = document.querySelector('.cards');

function renderCard(product){
    // Renders the MarkUp for a single product
    // Returns the card element
    let price_markup = (product.mrp != product.price) ? `<p>Rs.<del style="color: grey;">${product.mrp}</del> ${product.price}</p>`:`<p>Rs. ${product.price}</p>`;

    let card_design = `
    <div class="col col-12 col-sm-6 col-md-4 col-lg-3" id="${product.id}">
         <div class="card">
             <img src="assets/images/pic/${product.img}" class="card-img-top" alt="...">
                 <div class="card-body">
                     <h5 class="card-title">${product.title}</h5>
                     ${price_markup}
                     <button class="btn btn-dark" id="${product.id}">Add To Cart</button>
                 </div>
         </div>
    </div>
    `;
    return card_design;
}

function renderProducts(products){
    let result = '';
    for(let product of products){
        result += renderCard(product);
    }
    products_container.innerHTML = result;
}
renderProducts(product_elements);
