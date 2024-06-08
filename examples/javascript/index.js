const DeneyapKart = require("../../dist/index").default;

const dkMini = new DeneyapKart("COM8");

dkMini.on("ready", () => {
  console.log("Deneyap Kart'a Baglanildi");
});

dkMini.on("data", (data) => {
  console.log(`
  key : ${data.key}
  value : ${data.value}
  `);
});

dkMini.pinMode("D14", 1);
dkMini.digitalWrite("D14", 1);
dkMini.analogWrite("D14", 200);

dkMini.open();
