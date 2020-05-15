const product = { count: 4, price: 12.55, type: "ropa" };

let totalPrice = product.count < 1 ? 0 : product.count * product.price;

console.log("Total precio: " + totalPrice + "€");

let ivaValue;
switch(product.type){
  case "alimentacion":  ivaValue = 0.1;
                        break;
  case "libro":         ivaValue = 0.04;
                        break;
  default:              ivaValue = 0.21;
                        break;
}

let totalIva = product.count < 1 ? 0 : product.count * ivaValue;
console.log("Total IVA: " + totalIva + "€");