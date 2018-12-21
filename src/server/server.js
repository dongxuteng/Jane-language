const mysql = require('mysql'),
      express = require('express'),
      qs = require('querystring'),
      app = express();
      const bodyParser = require('body-parser');
app.use(bodyParser.json());
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
    database: 'jane'
});
// 链接数据库
// con.connect();

// 登录验证


app.post('/api/login', function(req,res){
    var loginData = '';
    const sql = 'select password from user where username=? ';
    req.on('data',function(data){
        loginData = JSON.parse(data);
    })
    req.on('end',function(data){
        con.query(sql,[loginData.username],(err,results)=>{
            results = JSON.stringify(results);
            results = JSON.parse(results);
            if(results[0] == undefined) {
                console.log('没有这个用户');
                res.end('1');
            }
            else if(results[0].password != loginData.password){
                console.log(results[0].password);
                console.log('账号或密码错误');
                res.end('1');
            }
            else{
                console.log(results.password);
                console.log('找到用户');
                res.end('0');
            }
        })
    })
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