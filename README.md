
# deneyapkart.js
A serial communication-based library that allows Deneyap Kart to be managed via computer




## Warning !

The library is still in the development process. You can send your requests and suggestions.

  
## Usage and Example

```javascript
const dk = require("./index");

const dkMini = new dk({
  port: "COM8",
});

dkMini.on("data", (data) => {
  console.log(`
  key : ${data.key}
  value : ${data.value}
  `);
});

dkMini.pinMode("D14", "OUTPUT");
dkMini.digitalWrite("D14", 1);
dkMini.analogWrite("D14", 200);

dkMini.open();

```

  
## Authors

- [@pxsty0](https://www.github.com/pxsty0) main and sole developer

  
## LICENSE

[MIT](https://choosealicense.com/licenses/mit/)

  
