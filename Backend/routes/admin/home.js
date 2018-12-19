var express = require('express'),
    router = express.Router(),
    User = require('../../models/user');

router.get('/',function(req,res){
    var name =  req.session.username;
    console.log("xxx");

    var num_recruit,num_user,num_man,num_woman,scale;
    var ii=0;
    // User.totalRecruitNum(function(err,result){
    //     num_recruit = JSON.stringify(result[0].num_recruit);
    //     ii++;if(ii==4){test();}    
    // });           
    //console.log(num_recruit+'qqqqqq');  

    User.totaluserNum(function(err,result){
        num_user = JSON.stringify(result[0].num_user);
        ii++;if(ii==3){test();}    
    });

    User.totalManNum(function(err,result){

        num_man =  JSON.stringify(result[0].num_man);  
        ii++;if(ii==3){test();}    
   
    });

    User.totalWomanNum(function(err,result){
        num_woman =  JSON.stringify(result[0].num_woman); 
        ii++;if(ii==3){test();}        
    });
    console.log(num_man);
    function gcd(a,b){ 
        var temp=b;
        while (v!=0)
        {
            temp=a%b;
            a=b;
            b=temp;
        }
        return a;
    }
    if(ii==3){
        scale=gcd(num_man,num_woman);
        test();
    }   
    function test(){
        console.log('33333',num_user,2,num_man,num_woman);
        res.render('index',{   
            title:'关键指标',
            page: 'home',
            username:name,
            data_recruit:10,
            data_user:num_user,
            data_man:num_man,
            data_woman:num_woman,
        });
    }
   
});

module.exports = router;