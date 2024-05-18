const { EventEmitter } = require("events");
const dataEmitter = new EventEmitter();
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

class DeneyapKart {
  constructor({ port, baudRate = 115200 }) {
    if (!port) throw new Error("invalid port");
    if (!baudRate) throw new Error("invalid baudRate");

    this.serial = new SerialPort({
      path: port,
      baudRate: parseInt(baudRate),
      autoOpen: false,
    });

    this.parser = this.serial.pipe(new ReadlineParser({ delimiter: "\r\n" }));

    this.parser.on("data", (data) =>
      require("./src/parser/data")(data, dataEmitter)
    );
  }

  open = () => require("./src/serial/open")(this);
  close = () => require("./src/serial/close")(this);

  on = (type, callback) => dataEmitter.on(type, callback);
}

module.exports = DeneyapKart;
