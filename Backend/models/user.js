var mysql = require('mysql');
var database = require('./database');
var pool = mysql.createPool(database.pool);
var DB_NAME = database.name;

pool.on('connection', function(connection) {  
    connection.query('SET SESSION auto_increment_increment=1'); 
});  

function User(user){
    this.username = user.username;
    this.userpass = user.userpass;
}

module.exports = User;

pool.getConnection(function(err, connection) {

    var useDbSql = "USE " + DB_NAME;
    connection.query(useDbSql, function (err) {
         if (err) {
            console.log("USE Error: " + err.message);
            return;
         }
         console.log('USE succeed');
    });

    //保存数据
    User.prototype.save = function save(callback) {

        var user = {
            username: this.username,
            userpass: this.userpass
        };
        console.log(user.username);
        pool.getConnection(function (err, connection) {

            var insertUser_Sql = "INSERT INTO admin(id,UserName,UserPass) VALUES(id,?,?)";
            connection.query(insertUser_Sql, [user.username, user.userpass], function (err, result) {

                connection.release();
                if (err) {
                    console.log("insertUser_Sql Error: " + err.message);
                    return;
                }

                console.log("invoked[save]");
                callback(err, result);
            });
        });
    };



    //根据用户名得到用户数量
    User.getUserNumByName = function getUserNumByName(username, callback) {

        pool.getConnection(function (err, connection) {
            var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM admin WHERE username = ?";

            connection.query(getUserNumByName_Sql, [username], function (err, result) {

                connection.release();
                if (err) {
                    console.log("getUserNumByName Error: " + err.message);
                    return;
                }

                console.log("invoked[getUserNumByName]");
                console.log('num');
                callback(err, result);
            });
        });
    };


    //根据用户名得到用户信息
    User.getUserByUserName = function getUserNumByName(username, callback) {
        pool.getConnection(function (err, connection) {
            var getUserByUserName_Sql = "SELECT * FROM admin WHERE UserName = ?";

            connection.query(getUserByUserName_Sql, [username], function (err, result) {

                connection.release();
                if (err) {
                    console.log("getUserByUserName Error: " + err.message);
                    return;
                }

                console.log("invoked[getUserByUserName]");
                callback(err, result);
            });
        });
    };

    //统计当天注册的总人数
    User.totalregNum = function totalregNum(callback){
        pool.getConnection(function(err,connection){

            var totalSeekerNum_Sql = "SELECT COUNT(*) AS num_reg FROM user where ";
            connection.query(totalSeekerNum_Sql,function(err,result){
                connection.release();
                if(err){
                    console.log("totalSeekerNum Error:" + err.message);
                    return;
                }

                console.log(result);               
                callback(err,result);
            });
        });
    };


    //统计用户总人数    
    User.totaluserNum = function totaluserNum(callback){
        pool.getConnection(function(err,connection){

            var totalSeekerNum_Sql = "SELECT COUNT(*) AS num_user FROM user";
            connection.query(totalSeekerNum_Sql,function(err,result){
                connection.release();
                if(err){
                    console.log("totalSeekerNum Error:" + err.message);
                    return;
                }

                console.log(result);               
                callback(err,result);
            });
        });
    };


    //统计男的人数
    User.totalManNum = function totalManNum(callback){

        pool.getConnection(function(err,connection){
            var totalManNum_sql = "select count(*) as num_man from article ";
            connection.query(totalManNum_sql,function(err,result){
                connection.release();

                if(err){
                    console.log("totalManNum Error:" + err.message);
                    return;
                }
                console.log(result);
                callback(err,result);
            });
        });
    }


    //统计女的人数
    User.totalWomanNum = function totalWomanNum(callback){

        pool.getConnection(function(err,connection){
            var totalWomanNum_sql = "select count(gender) as num_woman from user where gender='女'";
            connection.query(totalWomanNum_sql,function(err,result){
                connection.release();

                if(err){
                    console.log("totalWomanNum Error:" + err.message);
                    return;
                }
                console.log(result);
                callback(err,result);
            });
        });
    }

    // 管理员列表
    User.Master = function Master(callback){

        pool.getConnection(function(err,connection){
            var Master_sql = "select * from admin";
            connection.query(Master_sql,function(err,result){
                connection.release();

                if(err){
                    console.log("Master Error:" + err.message);
                    return;
                }
                callback(err,result);
            });
        });
    }

    //删除管理员
    User.Master_del = function Master_del(username,callback){

        pool.getConnection(function(err,connection){
            var Master_del_sql = "select * from admin where username = ?";
            connection.query(Master_del_sql,[username],function(err,result){
                connection.release();

                if(err){
                    console.log("Master_del Error:" + err.message);
                    return;
                }
                callback(err,result);
            });
        });
    }
    

    //求职人员列表   人员列表
    User.Seeker = function Seeker(callback){

        pool.getConnection(function(err,connection){
            var Seeker_sql = "select * from user";
            connection.query(Seeker_sql,function(err,result){
                connection.release();

                if(err){
                    console.log("Seeker Error:" + err.message);
                    return;
                }
                callback(err,result);
            });
        });
    }
    
 
    
    



});