module.exports = (data, dataEmitter) => {
  const msg = data.toString();

  if (!msg.startsWith("DK+")) return;

  const rawMsg = msg.replace("DK+", "");
  const arrMsg = rawMsg.split("=");

  const key = arrMsg[0].slice(1, -1);
  const value = arrMsg[1];

  dataEmitter.emit("data", {
    key,
    value,
  });
};
