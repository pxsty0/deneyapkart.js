const open = (base) =>
  base.serial.open((err) => {
    if (err) throw Error(`port listening failed: ${err.message}`);
    return true;
  });

module.exports = open;
