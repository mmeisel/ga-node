// See http://johnny-five.io/examples/repl/

const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  // Use 13 for the built-in LED, 11 is to match the previous example
  const led = new five.Led(11);

  board.repl.inject({
    // Allow limited on/off control access to the Led instance from the command line.
    on: () => {
      led.on();
    },
    off: () => {
      led.off();
    },
  });
});
