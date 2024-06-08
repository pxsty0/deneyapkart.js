"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serialport_1 = require("serialport");
const node_events_1 = __importDefault(require("node:events"));
const serialport_2 = require("serialport");
const data_1 = __importDefault(require("./src/events/data"));
const open_1 = __importDefault(require("./src/utils/open"));
const close_1 = __importDefault(require("./src/utils/close"));
const pinMode_1 = __importDefault(require("./src/board/pinMode"));
const digitalWrite_1 = __importDefault(require("./src/board/digitalWrite"));
const analogWrite_1 = __importDefault(require("./src/board/analogWrite"));
const dkEmitter = new node_events_1.default();
class DeneyapKart {
    serial;
    parser;
    constructor(path, baudRate = 115200) {
        this.serial = new serialport_1.SerialPort({ path, baudRate, autoOpen: false });
        this.parser = this.serial.pipe(new serialport_2.ReadlineParser({ delimiter: "\r\n" }));
        this.serial.on("open", () => dkEmitter.emit("ready"));
        this.parser.on("data", (data) => (0, data_1.default)(data, dkEmitter));
    }
    open = () => (0, open_1.default)(this.serial);
    close = () => (0, close_1.default)(this.serial);
    on = (eventName, callback) => dkEmitter.on(eventName, callback);
    pinMode = (pin, type) => (0, pinMode_1.default)(pin, type, this.serial);
    digitalWrite = (pin, state) => (0, digitalWrite_1.default)(pin, state, this.serial);
    analogWrite = (pin, value) => (0, analogWrite_1.default)(pin, value, this.serial);
}
exports.default = DeneyapKart;
