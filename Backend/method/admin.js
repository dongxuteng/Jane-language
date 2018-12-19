
var mysql = require('mysql');
var database = require('../models/database');
var pool = mysql.createPool(database.pool);

module.exports = {
    
    //添加管理员
    addMaster:function addMaster(name,pwd){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                connection.query("insert into admin(UserName,UserPass) values (?,?)",[name,pwd],function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                });
            })
        })
    },

    //删除管理员
    delMaster:function delMaster(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                connection.query("delete from admin where id =?",id,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                });
            })
        })
    },

    //更改管理员信息
    updateMaster:function updateMaster(name,pwd,id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                
                connection.query("update admin set UserName=?,UserPass=? where id=?",[name,pwd,id],function(err,result){              
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },

    //删除注册用户
    delUser_seeker:function delUser_seeker(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                connection.query("delete from user where Uid =?",id,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                });
                
            })
        })
    },
    

    //删除反馈信息
    delFeedback:function delFeedback(Uid){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var delFeedback_sql = 'delete from back where Uid =?';
                connection.query(delFeedback_sql,Uid,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },


    //用户详情
    detail_S:function detail_S(){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var detail_S_sql = 'select * from user';   
                connection.query(detail_S_sql,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },

    //删除用户详情
    delMsg_seeker:function delMsg_seeker(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var delMsg_seeker_sql = 'delete from user where Uid = ?'
                connection.query(delMsg_seeker_sql,id,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },
    //搜索
    SearchUser:function SearchUser(keyword){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var Search_sql = "select * from user where area like '%"+keyword+"%' or name like '%"+keyword+"%'";
                connection.query(Search_sql,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        console.log(1);
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },

    //查询反馈信息总数
    num_Feedback:function num_Feedback(){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var num_Feedback_sql = 'select count(*) as num from back';
                connection.query(num_Feedback_sql,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },

    //文章列表
    getArticle:function getArticle(){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var getArticle_sql = 'select * from article';
                connection.query(getArticle_sql,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        console.log(3);
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },
    //增加文章
    addArticle:function addArticle(data){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var addArticle_sql = 'insert into article(Uid,author,date,sort,title,content) values(?,?,?,?,?,?)';
                connection.query(addArticle_sql,[data.Uid,data.author,data.date,data.sort,data.title,data.content],function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },
    //删除文章
    delArticle:function delArticle(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var delArticle_sql = 'delete from article where id =?';
                connection.query(delArticle_sql,id,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },
    //文章详情
    msgArticle:function msgArticle(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var msgArticle_sql = 'select * from article where id =?';
                connection.query(msgArticle_sql,id,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },
    //更改文章
    updateArticle:function updateArticle(data){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var updateArticle_sql = 'update article set sort=?,title=?,content=? where id=?';
                connection.query(updateArticle_sql,[data.sort,data.title,data.content,data.id],function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        console.log(result);
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },

    //推荐文章列表
    GetArticle:function GetArticle(){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var getArticle_sql = 'select * from rec_article';
                connection.query(getArticle_sql,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        console.log(3);
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },
    //增加推荐文章
    AddArticle:function AddArticle(data){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var addArticle_sql = 'insert into rec_article(author,date,sort,title,content) values(?,?,?,?,?)';
                connection.query(addArticle_sql,[data.author,data.date,data.sort,data.title,data.content],function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },
    //删除推荐文章
    DelArticle:function DelArticle(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var delArticle_sql = 'delete from rec_article where id =?';
                connection.query(delArticle_sql,id,function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },
    //推荐文章详情
    MsgArticle:function MsgArticle(id){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var msgArticle_sql = 'select * from rec_article where id =?';
                connection.query(msgArticle_sql,[id],function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        console.log(1);
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },
    //更改推荐文章
    UpdateArticle:function UpdateArticle(data){
        return new Promise(function(resolve,reject){
            pool.getConnection(function(err,connection){
                var updateArticle_sql = 'update rec_article set sort=?,title=?,content=? where id=?';
                connection.query(updateArticle_sql,[data.sort,data.title,data.content,data.id],function(err,result){
                    if(err){
                        console.log(err);
                        reject(err);
                    }else{
                        console.log(result);
                        resolve(result);
                    }
                    connection.release();
                })
            })
        })
    },




}