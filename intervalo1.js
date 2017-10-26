const rpio = require('rpio');   //Librería para acceder al hardware
const pin = +process.argv[2];
const tiempoPrender = +process.argv[3];
const tiempoApagar = +process.argv[4];
rpio.open(pin, rpio.OUTPUT, rpio.LOW);
while(true) {
    rpio.msleep(tiempoPrender);
    rpio.write(pin, rpio.HIGH);
    rpio.msleep(tiempoApagar);
    rpio.write(pin, rpio.LOW);
}