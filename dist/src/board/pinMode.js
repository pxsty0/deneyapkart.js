"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serialFormat_1 = __importDefault(require("../utils/serialFormat"));
const pinMode = (pin, type, serial) => {
    if (!(type === 0 || type === 1 || type === 2))
        throw Error("invalid type");
    serial.write(`${(0, serialFormat_1.default)("PINMODE", pin, type)}\r\n`, (err) => {
        if (err)
            throw Error(`pinMode failed: ${err.message}`);
    });
};
exports.default = pinMode;
