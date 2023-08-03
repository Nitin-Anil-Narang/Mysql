var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "",
    user: "",
    password: null,
    database: ""

});

connection.connect(function(err){
    if(err){
        console.log(err,code);
        console.log(err,fatal);
    }
})

$query = "SELECT * FROM tablename ";

connection.query($query ,function(err,row,fields){
    if (err){
        console.log("An error occured with the query");
        return;
    }

    console.log("Query succesfull",row);
})

connection.end(function(){
    console.log("Closed")
})