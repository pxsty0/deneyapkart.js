import type { SerialPort } from "serialport";
declare const digitalWrite: (pin: string, state: number, serial: SerialPort) => void;
export default digitalWrite;
