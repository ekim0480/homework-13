const mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    user: "root",
    password: "password",
    port: 3306,
    host: "localhost",
    database: "burgers_db",
  });
}

connection.connect((err) => {
  if (err) throw err;
  console.log("Connection to database success!");
});

module.exports = connection;
