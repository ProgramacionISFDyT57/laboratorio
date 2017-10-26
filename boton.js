const rpio = require('rpio');  
const pinBoton = 36;
const pinLed1 = 38;
const pinLed2 = 40;
rpio.open(pinBoton, rpio.INPUT, rpio.PULL_UP);
rpio.open(pinLed1, rpio.OUTPUT, rpio.LOW);
rpio.open(pinLed2, rpio.OUTPUT, rpio.LOW);
while(true) {
    const estadoBoton = rpio.read(pinBoton);
    if (estadoBoton === rpio.LOW) {
        rpio.write(pinLed1, rpio.HIGH);
        rpio.sleep(3);
        rpio.write(pinLed1, rpio.LOW);
    } 
}