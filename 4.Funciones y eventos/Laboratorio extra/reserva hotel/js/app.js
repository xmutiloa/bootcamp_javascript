let roomType;

let spaValue = 0;

let occupancyType;

let numberNights;

let totalParkingNights = 0;


let handleRoomTypeChange = event => {
  roomType = parseInt(document.getElementById("roomType").value);
  calculateTotalCost(roomType, occupancyType, spaValue, numberNights, totalParkingNights);
}

let handleSpaValueChange = event => {
  spaValue = document.getElementById("spa").checked == true ? 20 : 0;
  calculateTotalCost(roomType, occupancyType, spaValue, numberNights, totalParkingNights);
}

let handleOccupancyTypeChange = event => {
  occupancyType = document.getElementById("occupancyType").value;
  calculateTotalCost(roomType, occupancyType, spaValue, numberNights, totalParkingNights);
}

let handleNumberNightsButtonChange = event => {
  numberNights = parseInt(document.getElementById("numberNights").value);
  calculateTotalCost(roomType, occupancyType, spaValue, numberNights, totalParkingNights);
}

let handleNumberParkingNightsButtonChange = event => {
  totalParkingNights = document.getElementById("numberParkingNights").value * 10;
  calculateTotalCost(roomType, occupancyType, spaValue, numberNights, totalParkingNights);
}


document.getElementById("roomType").addEventListener("change", handleRoomTypeChange);
document.getElementById("spa").addEventListener("click", handleSpaValueChange);
document.getElementById("occupancyType").addEventListener("change", handleOccupancyTypeChange);
document.getElementById("numberNights").addEventListener("change", handleNumberNightsButtonChange);
document.getElementById("numberParkingNights").addEventListener("change", handleNumberParkingNightsButtonChange);


let calculateTotalCost = (roomType, occupancyType, spaValue, numberNights, totalParkingNights) => {
  if(numberNights == undefined){
    alert("Necesitas introducir el número de noches para poder completar el cálculo")
    document.getElementById("totalCost").value = "";  
  }

  roomType = roomType == undefined ? 100 : roomType;
  occupancyType = occupancyType == undefined ? "double" : occupancyType;

  let totalCost = roomType + spaValue;

  switch(occupancyType){
    case "single":  totalCost = totalCost - totalCost * 0.25;
                    break;
    case "triple":  totalCost = totalCost + totalCost * 0.25;
                    break;
  }

  totalCost = totalCost * numberNights + totalParkingNights;

  document.getElementById("totalCost").value = totalCost;
}
