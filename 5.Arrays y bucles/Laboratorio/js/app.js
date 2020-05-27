const carrito = [
  {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
  },
  {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
  },
  {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
  },
  {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
  }
];

function printProductsList(arrayProductsList){
  let productsList = "";
  
  for(i=0; i< arrayProductsList.length;i++){
    productsList += arrayProductsList[i].count + " de " + arrayProductsList[i].name + " a " + arrayProductsList[i].price + "€ la unidad";
    productsList += arrayProductsList[i].premium ? " - Producto premium<br><br>" : "<br><br>";
  }
  document.getElementById("productsList").innerHTML = productsList;
}

let updateSendTextCost = sendState => {
  let message = sendState ? "Pedido sin gastos de envío" : "Este pedido tiene gastos de envío";
  document.getElementById("updateSendTextCost").innerText = message;
}

printProductsList(carrito);
updateSendTextCost(false);

let handleDeleteProductClick = event => {
  let index;
  let i= 0;
  do {
    index = i;
    i++;
  } while (carrito[i-1].id != "54657");

  carrito.splice(index, 1);
  printProductsList(carrito);
  updateSendTextCost(false);
  document.getElementById("result").value = "";
}

let handleTotalPriceClick = event => {
  let totalPrice = 0;
  for(i=0;i<carrito.length;i++){
    totalPrice += carrito[i].count * carrito[i].price;
  }
  if(totalPrice > 100)
    totalPrice = totalPrice - totalPrice * 0.05;
  document.getElementById("result").value = totalPrice;
}

let handlePremiumProductsClick = event => {

  let premiumList = [];

  for(i=0;i<carrito.length;i++){
    if(carrito[i].premium)
      premiumList.push(carrito[i]);
  }
  printProductsList(premiumList);
  updateSendTextCost(true);
}

document.getElementById("btnDeleteProduct").addEventListener("click", handleDeleteProductClick);
document.getElementById("btnTotalPrice").addEventListener("click", handleTotalPriceClick);
document.getElementById("btnPremiumProducts").addEventListener("click", handlePremiumProductsClick);



