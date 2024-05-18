module.exports = (pin, state, base) => {
  if (!pin) throw Error("invalid pin");
  if (state != 0 && state != 1) throw Error("invalid state");

  return base.serial.write(`DK+DIGITALWRITE=[${pin}][${state}]\r\n`, (err) => {
    if (err) throw Error(`digitalWrite failed: ${err.message}`);
  });
};
