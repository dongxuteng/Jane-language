var express = require('express');
var router = express.Router();
var detail_S = require('../../method/admin').detail_S;

router.get('/',function(req,res){
    var name =  req.session.username;
    detail_S().then(function(result){
        
        if(result){
            console.log('获取成功');
            res.render('index',{
                title:'用户管理',
                page: 'detail',
                username:name,
                data:result
                
            });
        }
        
    }).catch(function(err){
        console.log(err);
    })

   
});


module.exports = router;