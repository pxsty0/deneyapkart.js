"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const open = (serial) => serial.open((err) => {
    if (err)
        throw Error(`port listening failed: ${err.message}`);
    return true;
});
exports.default = open;
