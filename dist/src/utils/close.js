"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const close = (serial) => serial.close((err) => {
    if (err)
        throw Error(`port closing failed: ${err.message}`);
    return true;
});
exports.default = close;
