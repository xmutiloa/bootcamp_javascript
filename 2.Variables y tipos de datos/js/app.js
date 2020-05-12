var hoteles = {
    One: {
        name: "The one",
        location: "Barcelona",
        img: "https://r-cf.bstatic.com/images/hotel/max1280x900/143/143966604.jpg"  
    },
    Perla: {
        name: "La perla",
        location: "Pamplona",
        img: "https://r-cf.bstatic.com/images/hotel/max1024x768/150/150599102.jpg"
    }
};

var selectedHotel = prompt(
    "Indica el hotel sobre el que quiere hacer la reseña: One o Perla",
);

document.getElementById("name-hotel").innerHTML =
  "Hotel " + hoteles[selectedHotel].name;

document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hoteles[selectedHotel].location;

document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

var stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
document.getElementById("rating").innerHTML = stars[rating];

var anonymous = confirm("¿Quieres que la reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;