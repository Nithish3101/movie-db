var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    database:"moviedb",
    user:"root",
    password:"newpassword"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
