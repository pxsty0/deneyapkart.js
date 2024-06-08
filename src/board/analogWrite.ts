import type { SerialPort } from "serialport";
import serialFormat from "../utils/serialFormat";

const analogWrite = (pin: string, value: number, serial: SerialPort) => {
  serial.write(`${serialFormat("ANALOGWRITE", pin, value)}\r\n`, (err: any) => {
    if (err) throw Error(`analogWrite failed: ${err.message}`);
  });
};
export default analogWrite;
