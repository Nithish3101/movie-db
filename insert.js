var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    database:"moviedb",
    user:"root",
    password:"newpassword"
});
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql = "INSERT INTO movies (id, movie_name, lead_actor, lead_actress, date_of_release, director_name) VALUES ?";
    var values = [
      [1,'Moonrise Kingdom','Edward Norton','Kara Hayward',2012,'Wes Anderson'],
      [2,'Columbus','John Cho','Haley Lu Richardson',2017,'Kogonada'],
      [3,'Goodfellas','Robert De Niro','Lorraine Braco',1990,'Martin Scorsese'],
      [4,'Casino','Robert De Niro','Sharon Stone',1995,'Martin Scorsese'],
      [5,'Boogie Nights','Mark Walhberg','Heather Graham',1997,'Paul Thomas Anderson'],
      [6,'Magnolia','Tom Cruise','Melinda Dillon',1999,'Paul Thomas Anderson']
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
});


