import type { SerialPort } from "serialport";
declare const analogWrite: (pin: string, value: number, serial: SerialPort) => void;
export default analogWrite;
