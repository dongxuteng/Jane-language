var express = require('express');
var router = express.Router();
var GetArticle = require('../../method/admin').GetArticle;

router.get('/',function(req,res){
    var u_no =  req.session.username,data;
    GetArticle().then(function(result){
        if(result){       
            console.log(result);
            res.render('index',{
                title:'文章推荐',
                page: 'recommend',
                username:u_no,
                data:result
            });
        }
    }).catch(function(err){
            console.log(err);
        }
    );
    
});
Date.prototype.format = function(fmt) {
    var o = {
       "M+" : this.getMonth()+1,                 //月份 
       "d+" : this.getDate(),                    //日 
       "h+" : this.getHours(),                   //小时 
       "m+" : this.getMinutes(),                 //分 
       "s+" : this.getSeconds(),                 //秒 
       "q+" : Math.floor((this.getMonth()+3)/3), //季度
       "S"  : this.getMilliseconds()             //毫秒 
   }; 
   if(/(y+)/.test(fmt)) {
           fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
   }
   for(var k in o) {
      if(new RegExp("("+ k +")").test(fmt)){
           fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
   return fmt; 
} 

module.exports = router;