const mysql = require('mysql'),
      express = require('express'),
      qs = require('querystring'),
      app = express();
      app.all('*',function(req,res,next){
        res.header('Access-Control-Allow-Origin','*');
        res.header('Access-Control-Allow-Headers','Origin,X-Requested-With');
        res.header('Access-control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
        res.header('X-Powered-By','3.2.1');
        res.header('Content-Type','application/json;charset=urf-8');
        next();
    
    });

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'CuiYiMing_wm717',
    database: 'abc'
});

con.connect();

// con.query('SELECT * FROM admin',(err,data)=>{
//     console.log(data);
//     if(err){
//         console.log(err);
//     }
// })

app.post('/api/login', function(req,res){
    req.on('data',function(data){
        loginData = data.toString('utf8');
        loginDataJSON = JSON.parse(loginData);
    });
    req.on('end',function(){
        con.query({
        sql: 'SELECT password from `user` where `username`=? ',
        values: [loginDataJSON.username]},
        function(error,results){
            console.log(results);
            }
        )

    });
});
con.end();

app.listen(8100);