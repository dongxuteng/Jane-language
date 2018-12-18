const mysql = require('mysql'),
      express = require('express'),
      qs = require('querystring'),
      app = express();
    con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'CuiYiMing_wm717',
        database: 'abc'
    });

con.connect();

con.query('SELECT * FROM admin',(err,data)=>{
    console.log(data);
    if(err){
        console.log(err);
    }
})

con.end();