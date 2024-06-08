"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serialFormat_1 = __importDefault(require("../utils/serialFormat"));
const digitalWrite = (pin, state, serial) => {
    if (!(state === 0 || state === 1))
        throw Error("invalid state can use 0 or 1");
    serial.write(`${(0, serialFormat_1.default)("DIGITALWRITE", pin, state)}\r\n`, (err) => {
        if (err)
            throw Error(`digitalWrite failed: ${err.message}`);
    });
};
exports.default = digitalWrite;
