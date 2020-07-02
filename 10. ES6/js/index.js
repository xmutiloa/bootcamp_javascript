//1. HASID

const hasId = object => object.hasOwnProperty('id');

const country = {
    id: "ES",
    name: "España"
};

const agePerson = {
    name: "Xabier",
    age: 37
};

console.log(hasId(country));
console.log(hasId(agePerson));

//-------------------------------------------------------------------------------

//2. HEAD
// const head = ([first]) => first;

// const positions = ["primero", "segundo", "tercero", "cuarto"];

// const colors = ["azul", "rojo", "verde", "amarillo"];

// console.log(head(positions));
// console.log(head(colors));

//-------------------------------------------------------------------------------

//3. tail
// const tail = ([first, ...others]) => others;

// const positions = ["primero", "segundo", "tercero", "cuarto"];

// const colors = ["azul", "rojo", "verde", "amarillo"];

// console.log(tail(positions));
// console.log(tail(colors));

//-------------------------------------------------------------------------------

//4. swapFirstToLast
// const swapFirstToLast = ([first, ...rest]) => {
//     rest.push(first);
//     return rest;
// }

// const positions = ["primero", "segundo", "tercero", "cuarto"];

// const colors = ["azul", "rojo", "verde", "amarillo"];

// console.log(swapFirstToLast(positions));
// console.log(swapFirstToLast(colors));

//-------------------------------------------------------------------------------

//5. excludeId

// const excludeId = ({id, ...rest}) => rest;

// const country = {
//     id: "ES",
//     name: "España"
// };

// const agePerson = {
//     name: "Xabier",
//     age: 37
// };

// console.log(excludeId(country));
// console.log(excludeId(agePerson));

//-------------------------------------------------------------------------------

//6. wordsStartingWithA

// const wordsStartingWithA = wordsArray => wordsArray.filter(word => word.toLowerCase().startsWith("a"));

// const positions = ["primero", "segundo", "tercero", "cuarto"];

// const colors = ["azul", "rojo", "verde", "Amarillo"];

// console.log(wordsStartingWithA(positions));
// console.log(wordsStartingWithA(colors));

//-------------------------------------------------------------------------------

//7. concat

// const concat = (...myArguments) => {
//     copy = [...myArguments];
//     return copy.join(" | ");
// }

// console.log(concat("movil", "mesa", "sol"));
// console.log(concat("libro", "coche", "ventana", "manzana", "isla"));

//-------------------------------------------------------------------------------

//8. multArray

// const multArray = (arr, x) => arr.map(number => number * x);

// const numbers = [1, 2, 5, 10];

// console.log(multArray(numbers, 2));
// console.log(multArray(numbers, 5));


//-------------------------------------------------------------------------------

//9. calcMult

// const multArray = (...myArguments) => myArguments.reduce((total, number) => total * number, 1);

// console.log(multArray(1,2,5,10));
// console.log(multArray(2));


//-------------------------------------------------------------------------------
                                    //EXTRAS
//-------------------------------------------------------------------------------

//10. swapFirstSecond
// const swapFirstSecond = ([first, second, ...others]) => [second, first, ...others];

// const positions = ["primero", "segundo", "tercero", "cuarto"];
// const colors = ["azul", "rojo", "verde", "Amarillo"];

// console.log(swapFirstSecond(positions));
// console.log(swapFirstSecond(colors));

//-------------------------------------------------------------------------------

//11. longest

// const longest = (character, ...myArguments) => myArguments.every(word => word.toLowerCase().startsWith(character));

// console.log(longest('r', "primero", "segundo", "tercero", "cuarto"));
// console.log(longest('a', "azul", "armario", "arena", "Amarillo"));


//-------------------------------------------------------------------------------
//12. searchInStringV1

// const searchInStringV1 = (character, phrase) => {
//     phraseArray = Array.from(phrase);
//     return phraseArray.reduce((sumCharacter, char) => {
//         if(char.toLowerCase() === character.toLowerCase())
//             sumCharacter ++;
//         return sumCharacter;
//     }, 0);
// }

// console.log(searchInStringV1('i', "Implementa una función llamada searchInStringV1"));
// console.log(searchInStringV1('U', "No utilices bucles"));
// console.log(searchInStringV1('x', "Convierte el string"));


//-------------------------------------------------------------------------------
//13. searchInStringV2

// const searchInStringV2 = (character, phrase) => {
//     phraseArray = Array.from(phrase);
//     const sumCharacter = phraseArray.filter(char => char.toLowerCase() === character.toLowerCase());
//     return sumCharacter.length; 
// }

// console.log(searchInStringV2('i', "Implementa una función llamada searchInStringV2"));
// console.log(searchInStringV2('o', "No utilices bucles"));
// console.log(searchInStringV2('x', "Convierte el string"));

//-------------------------------------------------------------------------------
//14. sortCharacters
// const sortCharacters = (phrase) => {
//     phraseArray = Array.from(phrase);
//     return phraseArray.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));
// }

// console.log(sortCharacters("No utilices bucles"));
// console.log(sortCharacters("Convierte el string"));


//-------------------------------------------------------------------------------
//15. shout
// Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras
// concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.
// TIP: No utilices bucles.

// const shout = (...words) => words.reduce((totalString, word) => totalString + word.toUpperCase() + "!", "");

// console.log(shout("primero", "segundo", "tercero", "cuarto"));
// console.log(shout("azul", "rojo", "verde", "amarillo"));

//-------------------------------------------------------------------------------
//16. Lista de la compra

// const shoppingCart = [
//     { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
//     { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
//     { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
//     { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
//     { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
//     { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
//     { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
// ];

// //A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
// const calculateIVA = (shoppingCart) =>
//     shoppingCart.map(product => {
//         const iva = product.price * product.units * 0.21;
//         return { ...product, iva };
//     });

// console.log(calculateIVA(shoppingCart));

// //B. Ordena la lista de más a menos unidades.
// const sortByUnits = (shoppingCart) => shoppingCart.sort((a, b) => (a.units > b.units ? 1 : -1));

// console.log(sortByUnits(shoppingCart));

// //C. Obtén el subtotal gastado en droguería.
// const calculatePrice = (shoppingCart) => shoppingCart.filter(product => product.category === "Droguería")
//                                                      .reduce((totalPrice, product) => totalPrice + product.price, 0);

// console.log(calculatePrice(shoppingCart));


// //D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
// const showProductsPrice = (shoppingCart) => shoppingCart.sort((a, b) => (a.category > b.category ? 1 : -1))
//                                                      .map(product => product.product + " -> " + (product.price * product.units) + " €");

                                                     

// console.log(showProductsPrice(shoppingCart));