const product = { count: 4, price: 12.55, type: "ropa" };

let totalPrice = product.count < 1 ? 0 : product.count * product.price;

console.log("Total precio: " + totalPrice + "€");

function getVat(product){
  let ivaValue;
  switch(product.type){
    case "alimentacion":  ivaValue = 0.1;
    break;
    case "libro":         ivaValue = 0.04;
    break;
    default:              ivaValue = 0.21;
    break;
  }
  
  return ivaValue;
}

function getTotalVat(product) {
  return product.count > 0 ? product.count * getVat(product) : 0;
}

console.log("Total IVA: " + getTotalVat(product) + "€");