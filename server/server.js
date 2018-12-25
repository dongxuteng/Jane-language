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

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'CuiYiMing_wm717',
    database: 'jane'
});

// 登录验证


app.post('/api/login', function(req,res){
    var loginData = '';
    const sql = 'select password from user where username=? ';
    req.on('data',function(data){
        loginData = JSON.parse(data);
    })
    req.on('end',function(data){
        pool.query(sql,[loginData.username],(err,results)=>{
            results = JSON.stringify(results);
            results = JSON.parse(results);
            if(results[0] == undefined) {
                console.log('没有这个用户');
                res.end('1');
            }
            else if(results[0].password != loginData.password){
                console.log('账号或密码错误');
                res.end('1');
            }
            else{
                console.log('找到用户');
                res.end('0');
            }
        })
    })
});


// 注册验证


app.post('/api/signup', function(req,res){
    var signupData = '';
    const sqlUid = 'select Uid from user where username=? ';
    const sqlInsert = 'insert into user(username,password,phoneNumber) values(?,?,?) ';
    req.on('data', function(data){
        signupData = JSON.parse(data);
        console.log(signupData);
    });
    
    req.on('end', function(data){
        // 查询username是否存在
        pool.query(
            sqlUid, [signupData.username],(err,results)=>{
                results = JSON.stringify(results);
                results = JSON.parse(results);
                // 用户名不存在，注册
                if(results[0] == undefined){
                    console.log('没有这个用户，可以注册');
                    pool.query(
                        sqlInsert,
                        [signupData.username, signupData.password, signupData.phonenum],
                        (err,results)=>{
                            if(err){
                                console.log(err);
                            }else{
                                res.end('0');
                            }
                        }
                    )
                }else{
                    console.log('用户名已存在，无法注册');
                    res.end('1');
                }
            }
        )
    })
});


// get请求

function get(path,sql){
    app.get('/api/' + path, (req,res)=>{
        pool.query(
            sql,
            function(err,results){
                results = JSON.stringify(results);
                results = JSON.parse(results);
                if(err){
                    console.error(err);
                    res.send('1');
                }else{
                    res.send(results);
                }
            }
        )
    })
}


// 主页请求推荐文章
get('home','select * from rec_article');





// 发布

var fabuData;
var fabuDataJSON;

app.post('/api/home/fabu', function(req,res) {
    req.on('data', function(data){
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
    req.on('end', function(error,results){
        con.query({
            sql: 'insert into article set? ',
            values: [{ title: title, sort: sort, author: author, Uid: uid, content: content,}]
        })
    })
})








app.listen(8080,'localhost');