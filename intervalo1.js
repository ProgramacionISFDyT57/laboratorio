const rpio = require('rpio');   //Librería para acceder al hardware
const pin = +process.argv[2];
const segundos = +process.argv[3];
rpio.open(pin, rpio.OUTPUT, rpio.LOW);
while(true) {
    rpio.sleep(segundos);
    rpio.write(pin, rpio.HIGH);
    rpio.sleep(segundos);
    rpio.write(pin, rpio.LOW);
}