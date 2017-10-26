# Clase de Laboratorio
## 26/10/2017 -- ISFDyT N57
## Arquitectura de Computadores / Programación 1
#### Profesores: Vicente Mazzaro / Ezequiel Falcón

### Introducción
Este repositorio contiene todos los ejemplos y ejercicios vistos en clase sobre cómo utilizar Javascript/Node para interactuar con dispositivos electrónicos.
La temática se centró en cómo un sencillo fragmento de código Javascript, utilizando los conocimientos adquiridos a lo largo de las 2 materias, les permitió comprender e interactuar con los archivos ejemplificados en clase.
Adicionalmente este repositorio en sí mismo introduce un concepto nuevo, propio de Programación 2: Control de versionado de software.

### Contenidos revisados en la clase
#### Programación 1
* Estructuras de control repetitivas
* Variables
* Uso de librerías en Node (nuevo)
* Diferencia entre `var` y `let`/`const`

#### Arquitectura de Computadores
* Introducción al uso del protoboard para el diseño y testeo de prototipos.
* Utilización de componentes electrónicos fisicos (LEDs, resistencias, cables).
* Utilización de compuertas `NAND` (HD74LS00P) y `NOR` (HD74LS02P), presentación de sus respectivas hojas de datos.
* Introdución y uso de sistemas embebidos: `RASPBERRY PI 3 MODEL B`.

#### RASPBERRY PI 3 MODEL B
* Repaso de los distintos componentes de hardawe y periféricos (microprocesador, memorias ram y flash, USB, HDMI, RJ45).
* Utilización del GPIO del sistema para accionar elementos externos, tanto como entradas o salidas.
* Comunicación a través de WIFI al sistema.

### Archivos
* `demo.js`
Contiene un ejemplo de cómo utilizar la librería `rpio` para definir 2 salidas y alternar su estado, interactuando con los LED y la compuerta lógica `NAND` y `NOR`

* `intervalo1.js`
Define 3 argunemtos de entrada: el número de PIN que se va a utilizar, el tiempo de prendido y el tiempo de apagado.
Con este script vimos en clase cómo Node funciona en un sólo hilo y cómo ejecutar 2 procesos en simultáneo.

* `boton.js`
Introduce el concepto de OUTPUT, definiendo un PIN como entrada utilizando un botón pulsador para interactuar con los LED y la compuerta lógica.

* `package.json`
Indroducción al concepto de librerías en Node. Este archivo define las características de este repositorio, entre ellas, las librerías a utilizar.

### Instrucciones de uso
Para poder ejecutar estos ejemplos, es necesario descargar o clonar este repositorio en alguna SBC (Single Board Computer) o controlador que disponga de GPIOs (Pines de entrada/salida de uso general). Luego, hay que ejecutar el comando `npm install` dentro de la carpeta donde están los archivos, para instalar la librería `rpio`.
