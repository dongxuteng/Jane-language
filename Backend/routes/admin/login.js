var express = require('express'),
    router = express.Router(),
    User = require('../../models/user'),
    crypto = require('crypto'),
    TITLE_LOGIN = '登录';

router.get('/', function(req, res) {
    res.render('admin/login',{title:TITLE_LOGIN});
});

router.post('/', function(req, res) {
    var userName = req.body['txtUserName'],
        userPwd = req.body['txtUserPwd'],
        md5 = crypto.createHash('md5');
        userPwd = md5.update(userPwd).digest('hex');
        console.log(userPwd);
       
    User.getUserByUserName(userName, function (err, results) {                            
        
        if(results == '')
        {
            res.locals.error = '用户不存在';
            res.render('admin/login',{title:TITLE_LOGIN});
            return;
        }

        
        if(results[0].UserName != userName)
        {
            res.locals.error = '用户名有误';
            res.render('admin/login',{title:TITLE_LOGIN});
            console.log(1);
            return;
        }
        else if(results[0].UserPass != userPwd){
            res.locals.error = '密码有误';
            res.render('admin/login',{title:TITLE_LOGIN});
            console.log(1);
            return;
        }
        else
        {
            
            res.cookie('islogin', userName, { maxAge: 60000 });                 
            
            res.locals.username = userName;
            req.session.username = res.locals.username;  
            console.log(req.session.username);                        
            res.redirect('/');
            return;
        }     
    });              
});

module.exports = router;
