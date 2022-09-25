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
    var sql = "CREATE TABLE movies(id int(6) primary key,movie_name varchar(20),lead_actor varchar(20),lead_actress varchar(20),date_of_release int(4),director_name varchar(20))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});