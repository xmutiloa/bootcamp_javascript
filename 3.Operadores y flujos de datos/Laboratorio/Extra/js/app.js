const empleado = {
  bruto: 14500,
  hijos: 2,
  pagas: 14
}

let retencion = 0;

if(empleado.bruto >=12000 && empleado.bruto < 24000)
  retencion = 0.08;
else if(empleado.bruto >=24000 && empleado.bruto < 34000)
  retencion = 0.16;
else if(empleado.bruto >= 34000)
  retencion = 0.3;

if(empleado.hijos > 0 && retencion > 0)
  retencion = retencion - 0.02;

let netoNominaAnual = empleado.bruto - empleado.bruto * retencion;

let netoNominaMensual = netoNominaAnual / empleado.pagas;

console.log("Sueldo neto en nómina: " + netoNominaMensual +"€");
