const rpio = require('rpio');   //Librería para acceder al hardware
const pin1 = 40;                //número de pin físico a usar
const pin2 = 38;
rpio.open(pin1, rpio.OUTPUT, rpio.LOW);      //iniciar pin en 0 como salida
rpio.open(pin2, rpio.OUTPUT, rpio.LOW);

rpio.write(pin1, rpio.HIGH);    //poner el pin en 1 (o en positivo)
rpio.write(pin2, rpio.HIGH);

function titilar(pin, segs) {
    rpio.sleep(segs);
    rpio.write(pin, rpio.HIGH);
    console.log('prender pin ' + pin);
    rpio.sleep(segs);
    rpio.write(pin, rpio.LOW);
    console.log('apagar pin ' + pin);
}

/*setInterval(function() {
    titilar(pin1, 1)
});
setInterval(function() {
    titilar(pin2, 2)
});*/

while(true) {
    rpio.write(pin1, rpio.LOW);
    rpio.write(pin2, rpio.LOW);
    rpio.sleep(1);
    rpio.write(pin1, rpio.HIGH);
    rpio.sleep(1);
    rpio.write(pin1, rpio.LOW);
    rpio.write(pin2, rpio.HIGH);
    rpio.sleep(1);
    rpio.write(pin1, rpio.HIGH);
    rpio.sleep(1);
}