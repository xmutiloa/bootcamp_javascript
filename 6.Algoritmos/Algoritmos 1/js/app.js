// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  }
];

let shoppingCart = document.getElementById("shoppingCart");

let addProductIndex = (index, productLine) => {
    let productIndex = document.createElement("div");
    productIndex.setAttribute("class", "productIndex");
    productIndex.innerText = index + 1 + ".";
    productLine.appendChild(productIndex);
}

let addProductDescription = (product, productLine) => {
    let description = document.createElement("div");
    description.setAttribute("class", "description");
    description.innerText = product.description + " - " + product.price + "€/ud.";
    productLine.appendChild(description);
}

let handleChangeProductUnit = (actualProduct, unit) => {
  actualProduct.units = unit;
  for (product of products){
      if(parseInt(product.units) > 0){
          document.getElementById("calculateBtn").disabled = false;
          return false;
      }
  }
  document.getElementById("calculateBtn").disabled = true;
}

let addProductUnit = (product, productLine) => {
    let productUnit = document.createElement("input");
    productUnit.setAttribute("class", "productUnit");
    productUnit.setAttribute("type", "number");
    productUnit.setAttribute("value", 0);
    productUnit.setAttribute("min", 0);
    productUnit.setAttribute("max", product.stock);
    productUnit.addEventListener("change", event => handleChangeProductUnit(product, event.target.value));
    productLine.appendChild(productUnit);
}

let addProduct = (index,product) => {
    let productLine = document.createElement("div");
    productLine.setAttribute("class", "productLine");

    addProductIndex(index, productLine);
    addProductDescription(product, productLine);
    addProductUnit(product, productLine);
    
    shoppingCart.appendChild(productLine);
}

let showProductList = productsList => {
    for(let i = 0; i < productsList.length; i++){
        addProduct(i, productsList[i]);
    }
}

showProductList(products);

let calculateProductPrice = (units, price) => units * price;

let calculateTotalIva = (productPrice, tax) => productPrice * tax / 100;

let handleCalculateBtnClick = () => {
    let totalIva = 0;
    let productPrice = 0;
    let totalProductsPrice = 0;
    let totalPrice = 0;
    for(let i = 0; i < products.length; i++){
        if(products[i].units > 0){
            productPrice = calculateProductPrice(parseInt(products[i].units), products[i].price);
            if(products[i].tax !== EXEMPT_TYPE)
                totalIva += calculateTotalIva(productPrice, products[i].tax);
            totalProductsPrice += productPrice;
        }
    }

    document.getElementById("subtotal").innerText = totalProductsPrice + " €";
    document.getElementById("totalIva").innerText = totalIva + " €";
    document.getElementById("totalPrice").innerText = totalProductsPrice + totalIva + " €";
}

document.getElementById("calculateBtn").addEventListener("click", handleCalculateBtnClick);