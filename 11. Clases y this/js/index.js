reservas = [
    {
        tipoHabitacion: "standard",
        pax: 1,
        noches: 3
    },
    {
        tipoHabitacion: "standard",
        pax: 1,
        noches: 4
    },
    {
        tipoHabitacion: "suite",
        pax: 2,
        noches: 1
    }
];



class Bookings {
    constructor() {
        this._reservas = [];
        this._subtotal = 0;
        this._total = 0;
    }

    calculateRoomPrice(roomType){
        if(roomType === "standard")
            return 100;
        return 150;
    }

    supplementPerson(numPersons){
        return (numPersons > 1 ? --numPersons * 40 : 0);
    }
    
    calculateSubtotal() {
        this._subtotal = this._reservas.reduce(
            (acumulado, {tipoHabitacion, noches, pax}) => acumulado + (this.calculateRoomPrice(tipoHabitacion) * noches) + this.supplementPerson(pax),
            0
        );
    }

    get subtotal() {
        return this._subtotal;
    }

    calculateTotal() {
        this._total = this._subtotal * 1.21;
    }

    get total() {
        return this._total;
    }

    set reservas(reservas) {
        this._reservas = reservas;
        this.calculateSubtotal();
        this.calculateTotal();
    }
}

class TourBookings extends Bookings {
    constructor(){
        super(reservas);
    }
    calculateSubtotal() {
        this._subtotal = this._reservas.reduce(
            (acumulado, {noches, pax}) => acumulado + (100 * noches) + this.supplementPerson(pax),
            0
        );
    }

    calculateTotal() {
        this._total = this._subtotal * 1.06;
    }
}
    
const bookings = new Bookings();
bookings.reservas = reservas;
console.log("subtotal: ", bookings.subtotal);
console.log("total: ", bookings.total);


const tourBookings = new TourBookings();
tourBookings.reservas = reservas;
console.log("subtotal tour: ", tourBookings.subtotal);
console.log("total tour: ", tourBookings.total);

    