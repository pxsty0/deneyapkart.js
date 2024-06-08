"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataEmitter = (data, dkEmitter) => {
    const msg = data.toString();
    if (!msg.startsWith("DK+"))
        return;
    const rawMsg = msg.replace("DK+", "");
    const arrMsg = rawMsg.split("=");
    const key = arrMsg[0].slice(1, -1);
    const value = arrMsg[1];
    dkEmitter.emit("data", {
        key,
        value,
    });
};
exports.default = dataEmitter;
