var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"newpassword"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    con.query("create database moviedb", function(err,result){
        if(err) throw err;
        console.log("databse created");
    });
});