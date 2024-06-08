import type { SerialPort } from "serialport";

const open = (serial: SerialPort) =>
  serial.open((err: any) => {
    if (err) throw Error(`port listening failed: ${err.message}`);
    return true;
  });

export default open;
