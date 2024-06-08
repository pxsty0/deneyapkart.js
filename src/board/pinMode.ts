import type { SerialPort } from "serialport";
import serialFormat from "../utils/serialFormat";

const pinMode = (pin: string, type: number, serial: SerialPort) => {
  if (!(type === 0 || type === 1 || type === 2)) throw Error("invalid type");
  serial.write(`${serialFormat("PINMODE", pin, type)}\r\n`, (err) => {
    if (err) throw Error(`pinMode failed: ${err.message}`);
  });
};

export default pinMode;
