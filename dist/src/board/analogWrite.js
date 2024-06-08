"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serialFormat_1 = __importDefault(require("../utils/serialFormat"));
const analogWrite = (pin, value, serial) => {
    serial.write(`${(0, serialFormat_1.default)("ANALOGWRITE", pin, value)}\r\n`, (err) => {
        if (err)
            throw Error(`analogWrite failed: ${err.message}`);
    });
};
exports.default = analogWrite;
