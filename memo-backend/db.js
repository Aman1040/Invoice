var mysql = require("mysql2");
var express = require("express");
var cors = require("cors");
var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { error } = require("console");
app.use(cors());
var connection = mysql.createConnection({
  host: "localHost",
  user: "root",
  password: "password",
  database: "radhavilas",
});
connection.connect(() => {
  console.log("conneted successfully");
});

app.get("/company", (req, res) => {
  connection.query("SELECT * FROM company", (err, result) => {
    if (err) console.log(err);
    console.log(result);
    res.json(result);
  });
});

app.get("/customers", (req, res) => {
  console.log("data fetching...");
  connection.query("SELECT * FROM customers", (err, result) => {
    if (err) console.log(err);
    console.log(result);
    res.json(result);
  });
});

app.get("/invoice/:id", (req, res) => {
  const clientid = req.params.id;
  console.log(clientid);
  console.log("data fetching...");
  connection.query(
    `SELECT * FROM invoice where  customer_id=${clientid}`,
    (err, result) => {
      if (err) console.log(err);
      console.log(result);
      res.json(result);
    }
  );
});
app.post("/company/update", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const address = req.body.address;
  const phone1 = req.body.phone1;
  const phone2 = req.body.phone2;
  const landline = req.body.landline;
  const email = req.body.email;
  const website = req.body.website;
  connection.query(
    `UPDATE company SET company_name='${name}', address='${address}' ,mobile_no='${phone1}',alternate_mobile_no='${phone2}',landline='${landline}',email='${email}',website="${website}: WHERE id=${1}`,
    function (error, results, fields) {
      if (error) throw error;
      const obj = { msg: "data update" };
      res.send(JSON.stringify(obj));
    },
    console.log("Updated Successfully")
  );
});
app.get("/invoice", (req, res) => {
  connection.query("SELECT * FROM invoice", (err, result) => {
    if (err) console.log(err);
    console.log(result);
    res.json(result);
  });
});
app.listen(8000, () => {
  console.log("connected to server 8000");
});
