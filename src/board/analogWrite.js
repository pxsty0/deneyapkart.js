module.exports = (pin, value, base) => {
  if (!pin) throw Error("invalid pin");
  if (value < 0 || value > 255) throw Error("invalid value, range is 0-255");

  return base.serial.write(`DK+ANALOGWRITE=[${pin}][${value}]\r\n`, (err) => {
    if (err) throw Error(`analogWrite failed: ${err.message}`);
  });
};
