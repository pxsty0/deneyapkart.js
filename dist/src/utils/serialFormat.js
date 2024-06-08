"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serialFormat = (key, ...values) => {
    let msg = `DK+${key}=(${values.join(",")})`;
    return msg;
};
exports.default = serialFormat;
