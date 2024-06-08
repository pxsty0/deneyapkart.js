/// <reference types="node" />
import { SerialPort } from "serialport";
import EventEmitter from "node:events";
import { ReadlineParser } from "serialport";
export type dkDataType = {
    key: string;
    value: string;
};
declare class DeneyapKart {
    serial: SerialPort;
    parser: ReadlineParser;
    constructor(path: string, baudRate?: number);
    open: () => void;
    close: () => void;
    on: (eventName: string, callback: any) => EventEmitter<[never]>;
    pinMode: (pin: string, type: number) => void;
    digitalWrite: (pin: string, state: number) => void;
    analogWrite: (pin: string, value: number) => void;
}
export default DeneyapKart;
