const mysql = require('mysql'),
      express = require('express'),
      request = require('request'),
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
    host: '192.168.46.144',
    user: 'root',
    password: 'dxt980927',
    database: 'jane'
});

console.log(1);
// 登录验证

app.post('/api/login', function(req,res){
    var loginData = '';
    const sql = 'select * from user where username=? ';
    req.on('data',function(data){
        loginData = JSON.parse(data);
    })
    req.on('end',function(data){
        pool.query(sql,[loginData.username],(err,results)=>{
            //results = JSON.stringify(results);
            //results = JSON.parse(results);
            console.log(results);
            if(err){
                res.send({
                    code:1,
                    status:'error',
                    message:'连接数据库失败！'
                })
            }
            else if(results[0] == undefined) {
                console.log('没有这个用户');
                res.send({
                    code:1,
                    status:'error',
                    message:'此用户不存在！'
                })
            }
            else if(results[0].password != loginData.password){
                console.log('账号或密码错误');
                res.send({
                    code:1,
                    status:'error',
                    message:'帐号或密码错误'
                })
            }
            else{
                console.log('用户存在');
                res.send({
                    code:0,
                    status:'error',
                    result:results[0],
                    message:'登录成功！'
                })
            }
        })
    })
});
//注册界面验证码接口
app.post('/api/identify',function(req,res){
    var phonenum = req.body.phonenum;
    console.log(phonenum);
    // 产生验证码随机的6位数
    var range=function(start,end){
        var array=[];
        for(var i=start;i<end;++i){
            array.push(i);
        } 
        return array;
    };
    var randomstr = range(0,6).map(function(x){
        return Math.floor(Math.random()*10);
    }).join('');
    console.log(randomstr);

    pool.query('select * from user where phoneNumber=?', [phonenum], (err, result) => {
        if (err) {
            res.send({
                code: 1,
                status: 'error',
                message: '数据库错误'
            })
        }else{
            if(result.length!=0){
                res.send({
                    code: 2,
                    status: 'error',
                    message: '此手机号已经被注册！'
                })
            }else{
                var queryData = qs.stringify({
                    "mobile": phonenum,  // 接受短信的用户手机号码
                    "tpl_id": "117425",  // 申请的短信模板ID，根据实际情况修改
                    "tpl_value": "#code#=" + randomstr,  // 设置的模板变量，根据实际情况修改
                    "key": "1a95babdb961c0c98862aec3ed9c2c92",  // 自己申请的 APPKEY
                });
                
                var queryUrl = 'http://v.juhe.cn/sms/send?'+queryData;
                
                request(queryUrl, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        console.log(body) // 打印接口返回内容
                        
                        var jsonObj = JSON.parse(body); // 解析接口返回的JSON内容
                        console.log(jsonObj);
                        if(jsonObj.error_code != 0){
                            res.send({
                                code:1,
                                status:'error',
                                message:jsonObj.reason
                            });
                        }else{
                            res.send({
                                code:0,
                                phoneCode:randomstr,
                                message:jsonObj.reason
                            });
                        }
                    } else {
                        console.log('请求异常');
                        res.end({
                            code:1,
                            message:"请求异常"
                        })
                    }
                }) 
            }
        }
    })
});

//修改密码页面验证码接口
app.post('/api/findidentify',function(req,res){
    var phonenum = req.body.phonenum;
    var username = req.body.username;
    console.log(phonenum);
    // 产生验证码随机的6位数
    var range=function(start,end){
        var array=[];
        for(var i=start;i<end;++i){
            array.push(i);
        } 
        return array;
    };
    var randomstr = range(0,6).map(function(x){
        return Math.floor(Math.random()*10);
    }).join('');
    console.log(randomstr);

    pool.query('select * from user where phoneNumber=? and username=?', [phonenum,username], (err, result) => {
        if (err) {
            res.send({
                code: 1,
                status: 'error',
                message: '数据库错误'
            })
        }else{
            if(result.length == 0){
                res.send({
                    code: 2,
                    status: 'error',
                    message: '此手机号不存在！'
                })
            }else{
                var queryData = qs.stringify({
                    "mobile": phonenum,  // 接受短信的用户手机号码
                    "tpl_id": "117425",  // 申请的短信模板ID，根据实际情况修改
                    "tpl_value": "#code#=" + randomstr,  // 设置的模板变量，根据实际情况修改
                    "key": "1a95babdb961c0c98862aec3ed9c2c92",  // 自己申请的APPKEY
                });
                
                var queryUrl = 'http://v.juhe.cn/sms/send?'+queryData;
                
                request(queryUrl, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        console.log(body) // 打印接口返回内容
                        
                        var jsonObj = JSON.parse(body); // 解析接口返回的JSON内容
                        console.log(jsonObj);
                        if(jsonObj.error_code != 0){
                            res.send({
                                code:1,
                                status:'error',
                                message:jsonObj.reason
                            });
                        }else{
                            res.send({
                                code:0,
                                phoneCode:randomstr,
                                message:jsonObj.reason
                            });
                        }
                    } else {
                        console.log('请求异常');
                        res.end({
                            code:1,
                            message:"请求异常"
                        })
                    }
                }) 
            }
        }
    })
});

// 注册验证


app.post('/api/signup', function(req,res){
    var signupData;
    const sqlUid = 'select Uid from user where username=? ';
    const sqlInsert = 'insert into user(username,password,phoneNumber) values(?,?,?) ';
    req.on('data', function(data){
        signupData = JSON.parse(data);
        console.log(signupData);
    });
    
    req.on('end', function(data){
        // 查询username是否存在
        pool.query(sqlUid, [signupData.username],(err,results)=>{
                // 用户名不存在，注册
                if(results[0] == undefined){
                    console.log('没有这个用户，可以注册');
                    pool.query(sqlInsert,[signupData.username, signupData.password, signupData.phonenum],(err,results)=>{
                        if(err){
                            res.send({
                                code:1,
                                status:'error',
                                message:'注册失败'
                            })
                        }else{
                            res.send({
                                code:0,
                                status:'success',
                                message:'注册成功'
                            });
                        }
                    })
                }else{
                    res.send({
                        code:1,
                        status:'error',
                        message:'用户名已存在，无法注册'
                    });
                }
            }
        )
    })
});

// 修改密码
app.post('/api/fidepsw', function(req,res){
    var signupData;
    const sqlUid = 'select * from user where username=? and phoneNumber = ?';
    const sqlUpdate = 'update user set password = ? where username = ?';
    req.on('data', function(data){
        signupData = JSON.parse(data);
        console.log(signupData);
    });
    
    req.on('end', function(data){
        // 查询username是否存在以及手机号是否正确
        pool.query(sqlUid, [signupData.username,signupData.phonenum],(err,results)=>{
                // 用户名不存在，或者手机号错误
                if(results[0] == undefined){
                    res.send({
                        code:1,
                        status:'error',
                        message:'用户名不存在或者手机号错误！'
                    });
                }else{
                    pool.query(sqlUpdate,[signupData.password, signupData.username],(err,results)=>{
                        if(err){
                            res.send({
                                code:1,
                                status:'error',
                                message:'修改失败'
                            })
                        }else{
                            res.send({
                                code:0,
                                status:'success',
                                message:'修改成功'
                            });
                        }
                    })
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

// 内容页请求主页文章内容
get('home/neirong','select * from rec_article');

// 内容页请求精选文章内容
get('sight/neirong','select * from article');

// 精选页获取热门文章
// TODO: 选取点赞多的作为热门文章
get('sight','select * from article');



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
