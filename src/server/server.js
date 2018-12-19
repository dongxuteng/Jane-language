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
// 链接数据库
// con.connect();

// 登录验证

var loginData;
var loginDataJSON;

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
            var pwd = results.toString('UTF8');
            if(pwd === loginDataJSON){
                console.log('验证成功');
                res.send(results);
            }
            else{
                res.end('0');
            }
        })
    });
});


// 注册验证

var signupData;
var signupDataJSON;

app.post('/api/signup', function(req,res){
    res.on('data', function(data){
        console.log(1);
        signupData = data.toString('utf8');
        signupDataJSON =JSON.parse(signupData);
        var username = signupDataJSON.username;
        var password = signupDataJSON.password;
        var phonenum = signupDataJSON.phonenum;
    });
    
    res.on('end', function(){
        // 查询username是否存在
        con.query({
            sql: 'select Uid from `user` where username=? ',
            values: [signupDataJSON.username],
            function(error,results){
                var uid = results.toString('utf8');
                if(uid === ''){
                    console.log('用户名可以注册');
                    con.query({
                        // username不存在,可以注册,执行插入语句
                        sql: 'insert into user set? ',
                        values: [{username: username, password: password}],
                        function(error,results){
                            if (error) throw error;
                            else {
                                console.log('注册成功');
                                res.end('1');
                            }
                        }
                    })
                }
            }
        })
    })
});

// 发布

var fabuData;
var fabuDataJSON;

app.post('/api/home/fabu', function(req,res) {
    res.on('data', function(data){
        fabuData = data.toString('utf8');
        fabuDataJSON = JSON.parse(fabuData);
        var author;
        var uid;
        var title = fabuDataJSON.title;
        var sort = fabuDataJSON.sort;
        var content = fabuDataJSON.content;
        var username = localStorage.getItem('username');
        var date = fabuDataJSON.date;
        con.query({
            sql: 'select uid,name from user where `username=? `',
            values: [username],
            function(error,results) {
                if (error) throw error;
                else {
                    author = results.name;
                    uid = results.Uid;
                }
            }
        })
    });
    res.on('end', function(error,results){
        con.query({
            sql: 'insert into article set? ',
            values: [{ title: title, sort: sort, author: author, Uid: uid, content: content,}]
        })
    })
})







// con.end();

app.listen(8080,'localhost');