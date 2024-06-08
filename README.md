# deneyapkart.js

A serial communication-based library that allows Deneyap Kart to be managed via computer

## Warning !

The library is still in the development process. You can send your requests and suggestions.

## Usage and Example

### JavaScript

```javascript
const DeneyapKart = require("deneyapkart").default;

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
```

### TypeScript

```typescript
import DeneyapKart, { dkDataType } from "deneyapkart";

const dkMini = new DeneyapKart("COM8");

dkMini.on("ready", () => {
  console.log("Deneyap Kart'a Baglanildi");
});

dkMini.on("data", (data: dkDataType) => {
  console.log(`
  key : ${data.key}
  value : ${data.value}
  `);
});

dkMini.pinMode("D14", 1);
dkMini.digitalWrite("D14", 1);
dkMini.analogWrite("D14", 200);

dkMini.open();
```

## Authors

- [@pxsty0](https://www.github.com/pxsty0) main and sole developer

## LICENSE

[MIT](https://choosealicense.com/licenses/mit/)
