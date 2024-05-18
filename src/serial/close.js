const close = (base) =>
  base.serial.close((err) => {
    if (err) throw Error(`port closing failed: ${err.message}`);
    return true;
  });

module.exports = close;
