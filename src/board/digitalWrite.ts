import type { SerialPort } from "serialport";
import serialFormat from "../utils/serialFormat";

const digitalWrite = (pin: string, state: number, serial: SerialPort) => {
  if (!(state === 0 || state === 1))
    throw Error("invalid state can use 0 or 1");
  serial.write(
    `${serialFormat("DIGITALWRITE", pin, state)}\r\n`,
    (err: any) => {
      if (err) throw Error(`digitalWrite failed: ${err.message}`);
    }
  );
};
export default digitalWrite;
