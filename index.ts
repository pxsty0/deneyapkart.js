import { SerialPort } from "serialport";
import EventEmitter from "node:events";
import { ReadlineParser } from "serialport";

import dataEmitter from "./src/events/data";

import open from "./src/utils/open";
import close from "./src/utils/close";

import pinMode from "./src/board/pinMode";
import digitalWrite from "./src/board/digitalWrite";
import analogWrite from "./src/board/analogWrite";

const dkEmitter = new EventEmitter();

export type dkDataType = {
  key: string;
  value: string;
};

class DeneyapKart {
  serial: SerialPort;
  parser: ReadlineParser;

  constructor(path: string, baudRate: number = 115200) {
    this.serial = new SerialPort({ path, baudRate, autoOpen: false });
    this.parser = this.serial.pipe(new ReadlineParser({ delimiter: "\r\n" }));

    this.serial.on("open", () => dkEmitter.emit("ready"));

    this.parser.on("data", (data: string) => dataEmitter(data, dkEmitter));
  }

  open = () => open(this.serial);
  close = () => close(this.serial);

  on = (eventName: string, callback: any) => dkEmitter.on(eventName, callback);

  pinMode = (pin: string, type: number) => pinMode(pin, type, this.serial);
  digitalWrite = (pin: string, state: number) =>
    digitalWrite(pin, state, this.serial);
  analogWrite = (pin: string, value: number) =>
    analogWrite(pin, value, this.serial);
}

export default DeneyapKart;
