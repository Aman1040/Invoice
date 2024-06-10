var jwt = require("jsonwebtoken");
var token = jwt.sign({ foo: "bar" }, "shhh");
console.log(token);
