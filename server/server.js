const mysql = require('mysql'),
      express = require('express'),
      request = require('request'),
      qs = require('querystring'),
      fs = require('fs'),
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
    host: '192.168.169.144',
    user: 'root',
    password: 'ddd',
    database: 'Jane',
    dateStrings:Date
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
                    status:'sucess',
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
    const sqlInsert = 'insert into user(username,password,phoneNumber,regtime,name,trendsTitle,target,followers,grade) values(?,?,?,?,?,?,?,?,?) ';
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
                    pool.query(sqlInsert,[signupData.username, signupData.password, signupData.phonenum,signupData.regtime,signupData.name,signupData.trendsTitle,signupData.target,signupData.followers,signupData.grade],(err,results)=>{
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
                // results = JSON.stringify(results);
                // results = JSON.parse(results);
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
get('sight','select * from article,user where article.Uid=user.Uid');

// 我的页面请求个性签名
app.post('/api/me', function(req,res) {
    var username = req.body.username;
    const sql = 'select * from user where username=?';
    pool.query(sql,username,(err,results)=>{
        console.log(results);
        if(results[0] === undefined){
            res.send({
                code:1,
                status:'error',
                message:"查询失败"
            })
        }else{
            res.send(results);
        }
        
        
    })
})

//精选页点赞更新数据
app.post('/api/star',function(req,res){
    var star1 = req.body.star1;
    var id = req.body.id;
    var flag=req.body.flag;
    const sql = 'update article set star1= ?,flag=? where id= ? ';
    pool.query(sql,[star1,flag,id],function(err,results){
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
       
})

//首页点赞更新数据
app.post('/api/star1',function(req,res){
var star1 = req.body.star1;
var id = req.body.id;
var flag=req.body.flag;
const sql = 'update rec_article set star= ?,flag=? where id= ? ';
pool.query(sql,[star1,flag,id],function(err,results){
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
app.post('/api/star2',function(req,res){
    var count = req.body.star;
    var id = req.body.id;
    console.log(count);
    pool.query(
        'update rec_article set star=? where id=?',
        [count,id],
        (err,results)=>{
            console.log(results);
        }
    )
})
})
//评论内容
app.post('/api/comment',function(req,res){
    var id=req.body.id;
    //var value=string(req.body.value);
    var value=req.body.value;
    const sql='select * from commentTable where id=? and valuess=?';
    pool.query(
        sql,[id,value],(err,result)=>{
            if(err){
                res.send({
                    code:1,
                    status:'error',
                    message:'查询失败'
    
                })
            
             }
             else{
                res.send(result);
            }
        }
    )
})
//首页,评论页评论更新
app.post('/api/release',function(req,res){
    var comment=req.body.comment;
    var comments=req.body.comments;
    var title=req.body.title;
    var id=req.body.id;
    var value=req.body.value;
    var userId=req.body.userId;
    var username=req.body.username;
    var time=req.body.time;
    //console.log(title);
    const sql2='update article set comments= ? where id= ?';
    const sql1='update rec_article set comments= ? where title= ?';
    const sql ='insert into commentTable(id,commentUid,commentUsername,commentTime,comment,valuess) values(?,?,?,?,?,?);'
    if(value==="rec_article"){
        pool.query(sql1,[comments,title],function(err,results){
            if(err){
                res.send({
                    code:1,
                    status:'error',
                    message:'修改失败'
                })
            }else{
                // res.send({
                //     code:0,
                //     status:'success',
                //     message:'修改成功'
                // });
                pool.query(sql,[id,userId,username,time,comment,value],(err,results)=>{
                    if (err){
                        res.send({
                            code:2,
                            status:'error',
                            message:'添加失败'
                        })
                    }else{
                        res.send({
                            code:0,
                            status:'success',
                            message:'添加成功'
                        });
                    }
                })
            }
        })
    
    }
    else if(value==="sight"){
        pool.query(sql2,[comments,id],function(err,results){
            if(err){
                res.send({
                    code:1,
                    status:'error',
                    message:'修改失败'
                });
            }else{
                // res.send({
                //     code:0,
                //     status:'success',
                //     message:'修改成功'
                // });
                pool.query(sql,[id,userId,username,time,comment,value],(err,results)=>{
                    if (err){
                        res.send({
                            code:2,
                            status:'error',
                            message:'添加失败'
                        })
                    }else{
                        res.send({
                            code:0,
                            status:'success',
                            message:'添加成功'
                        });
                    }
                })
            }
        })
    }
})
//文章添加收藏
app.post('/api/collect',function(req,res){
    var Uid=req.body.Uid;
    var pid=req.body.pid;
    var value=req.body.value;
    var flag=req.body.flag;
    var id=req.body.id;
    const sql='insert into collect(Uid,pid,value,flag,id) values(?,?,?,?,?)';
    if(value==='rec_article'){
        pool.query(sql,[Uid,pid,value,flag,id],function(err,results){
            if(err){
                res.send({
                    code:1,
                    status:'error',
                    message:'插入失败'
                })
            }else{
                res.send({
                    code:0,
                    status:'success',
                    message:'插入成功'
                });
            }
        })
    }
    else if(value==='sight'){
        pool.query(sql,[Uid,pid,value,flag,id],function(err,results){
            if(err){
                res.send({
                    code:1,
                    status:'error',
                    message:'插入失败'
                })
            }else{
                res.send({
                    code:0,
                    status:'success',
                    message:'插入成功'
                });
            }
        })
    }
})
//文章取消收藏
app.post('/api/unCollect',function(req,res){
    var Uid=req.body.Uid;
    var id=req.body.id;
    var value=req.body.value;
    const sql='delete from collect where Uid=? and id=?';
    if(value==='rec_article'){
        pool.query(sql,[Uid,id],function(err,results){
            if(err){
                res.send({
                    code:1,
                    status:'error',
                    message:'删除失败'
                })
            }else{
                res.send({
                    code:0,
                    status:'success',
                    message:'删除成功'
                });
            }
        })
    }
    else if(value==='sight'){
        pool.query(sql,[Uid,id],function(err,results){
            if(err){
                res.send({
                    code:1,
                    status:'error',
                    message:'删除失败'
                })
            }else{
                res.send({
                    code:0,
                    status:'success',
                    message:'删除成功'
                });
            }
        })
    }
})
//获取收藏表内容 
app.post('/api/collect1',function(req,res){
    var id=req.body.id;
    const sql='select * from collect where Uid=?';
    pool.query(sql,id,function(err,result){
        if(err){
            res.send({
                code:1,
                status:'查询失败',
                message:'error'
            });
        }else{
            res.send(result);
        }
    })
})
//文章页获取内容
app.post('/api/trends',function(req,res){
    var id=req.body.id;
    const sql='select * from trends where trendsId in(select pid from collect where Uid=?)';
    pool.query(sql,id,function(err,result){
        if(err){
            res.send({
                code:1,
                status:'查询失败',
                message:'error'
            });
        }else{
            res.send(result);
        }
    })
})
//编辑个人信息
app.post('/api/change',function(req,res){
var sex=req.body.sex;
var username=req.body.username;
var constellation=req.body.constellation;
var geqian=req.body.geqian;
var nicheng=req.body.nicheng;
var myDate=req.body.myDate;
var Uid=req.body.Uid;
const sql='update user set gender=?,constellation=?,birthday=?,trendsTitle=?,name=? where username=?';
pool.query(sql,[sex,constellation,myDate,geqian,nicheng,username],function(err,results){
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
})

app.post('/api/personal',(req,res)=>{
    var username = req.body.username;
    const sql = 'select * from user,article where username = ? and user.Uid=article.Uid';
    pool.query(sql,[username],(err,results)=>{
        console.log(results);
        if(results[0] === undefined){
            res.send({
                code:1,
                status:'error',
                message:"查询失败"
            })
        }else{
            res.send(results);
        } 
    })
})

//上传头像
app.post('/api/avatar', (req, res) => {
    var file = req.body.avatar;
    var buf = new Buffer(file, 'base64');
    // log(buf);
    fs.writeFile('./avatar.jpg', buf, err => {
        if (err) {
            log(err);
            res.send(err);
        } else {
            log("save success");
            res.send("save success");
        }
    });
});



// 根据标签选择内容页
function getContent(path,value){
    app.get('/api/'+path,(req,res)=>{
        pool.query(
            'select * from article where sort=?',
            value,
            function(err,results){
                results = JSON.stringify(results);
                results = JSON.parse(results);
                if(err){
                    console.log(err);
                    res.end('1');
                }else{
                    console.log(results);
                    res.send(results);
                }
            }
        )
    })
}

// 获取随笔内容
getContent('essay','随笔');

// 获取美食内容
getContent('foods','美食');

//获取情感内容
getContent('emotions','情感');

// 获取励志内容
getContent('encouragements','励志');

// 获取旅行内容
getContent('travel','旅行');

// 获取音乐内容
getContent('music','音乐');

// 获取影视内容
getContent('movie','影视');




// app.post('/api/release',function(req,res) {
//     var name; // 评论人昵称
//     var userId = req.body.userId; // 评论人的Id
//     var username = req.body.username; // 评论人的用户名
//     var id = req.body.id;  // 评论的文章id
//     var time = req.body.time; // 评论时间
//     var comments = req.body.comments; // 评论内容
//     var value = req.body.value; // 评论的文章类型
//     console.log(id,username,time,comments,value);
//     pool.query(
//         'select * from user where username=?',
//         username,
//         // 查询name
//         (err,results)=>{
//             results = JSON.stringify(results);
//             results = JSON.parse(results);
//             name = results[0].name;
//             // 文章类型为推荐文章
//             if(value == 'rec_article'){
//                 pool.query(
//                     'insert into trendsReply(id,username,replyContent,name) values(?,?,?,?) ',
//                     [id,username,comments,name],
//                 (err,results)=>{
//                     if(err){
//                         console.log(err);
//                         res.end('1');
//                     }else{
//                         console.log('评论成功');
//                     }
//                 }
//                 )
//             }
//         }
//         )
// })


// 发布

app.post('/api/home/fabu', function(req,res) {
    var fabuData;
    var author;
    var uid;
    const sql1='select * from user where username=?';    
    const sqlInsert = 'insert into article(title,sort,content,date) values(?,?,?,?)';
    req.on('data', function(data){
        console.log("1",data);
        fabuData = JSON.parse(data)
        console.log("2",fabuData);
    });
    req.on('end', function(error,results){
        pool.query(sql1,[fabuData.username],(err,results)=>{
            console.log("3",results);
            if(results[0] === undefined){
                res.send({
                    code:1,
                    status:'error',
                    message:"查询失败"
                })
            }else{
                pool.query(sqlInsert,[fabuData.title,fabuData.sort,fabuData.content,fabuData.date],(err,results)=>{
                    console.log("4",results);
                    res.send({
                        code:0,
                        status:'success',
                        message:'发布成功'
                    })
                })
            } 
        })
        
        
    })
})



    




app.listen(8080,'localhost');
