module.exports = (pin, type, base) => {
  if (!pin) throw Error("invalid pin");
  if (!(type == "OUTPUT" || type == "INPUT" || type == "INPUT_PULLUP"))
    throw Error("invalid type");

  return base.serial.write(`DK+PINMODE=[${pin}][${type}]`, (err) => {
    if (err) throw Error(`pinMode failed: ${err.message}`);
  });
};
