import type EventEmitter from "node:events";
import { dkDataType } from "../../index";

const dataEmitter = (data: string, dkEmitter: EventEmitter) => {
  const msg = data.toString();

  if (!msg.startsWith("DK+")) return;

  const rawMsg = msg.replace("DK+", "");
  const arrMsg = rawMsg.split("=");

  const key = arrMsg[0].slice(1, -1);
  const value = arrMsg[1];

  dkEmitter.emit("data", {
    key,
    value,
  } as dkDataType);
};

export default dataEmitter;
