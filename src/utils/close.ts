import type { SerialPort } from "serialport";

const close = (serial: SerialPort) =>
  serial.close((err: any) => {
    if (err) throw Error(`port closing failed: ${err.message}`);
    return true;
  });

export default close;
