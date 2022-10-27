// --------------------------------------------------------
// Upload 01-button-serial.ino to Arduino board!
// --------------------------------------------------------

const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const sPort = new SerialPort({ path: '/dev/cu.usbmodem14101', baudRate: 9600 });
const parser = sPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));


// --------------------------------------------------------
// SERIAL PORT
// --------------------------------------------------------
// Tells us when the serial port is open and available to read from.
// Make sure your serial monitor is not open with Arduino!
sPort.on('open', () => {
  console.log('Serial port open.');
});

// --------------------------------------------------------
// Our parser streams the incoming serial data
parser.on('data', (data) => {
  if (parseInt(data) == 1) {
    console.log('BUTTON PRESSED');
  } else {
    console.log('NOT PRESSED');
  }
});
