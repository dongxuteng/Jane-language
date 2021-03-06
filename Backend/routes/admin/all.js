var express = require('express'),
    router = express.Router(),
    crypto = require('crypto');

var delMaster = require('../../method/admin').delMaster;
var updateMaster = require('../../method/admin').updateMaster;
var addMaster = require('../../method/admin').addMaster;
var delUser_seeker = require('../../method/admin').delUser_seeker;
var delFeedback = require('../../method/admin').delFeedback;
var delMsg_seeker = require('../../method/admin').delMsg_seeker;
var addArticle = require('../../method/admin').addArticle;
var updateArticle = require('../../method/admin').updateArticle;
var delArticle = require('../../method/admin').delArticle;
var msgArticle = require('../../method/admin').msgArticle;
var SearchUser = require('../../method/admin').SearchUser;
var MsgArticle = require('../../method/admin').MsgArticle;
var DelArticle = require('../../method/admin').DelArticle;
var UpdateArticle = require('../../method/admin').UpdateArticle;
var AddArticle = require('../../method/admin').AddArticle;
//var SearchS = require('../../method/Ruser').Search;
//var SearchR = require('../../method/Suser').Search;
//var Delnear = require('../../method/Ruser').Delnear; 

 


//搜索结果
// router.post('/searchdata',function(req,res){
//     var range = req.body.radio;
//     var data = req.body.txt;
//     var name =  req.session.username;
//     console.log(range,data);
//     if(range=='option1'){
//         SearchS(data).then(function(data){
//             // console.log(data[0].id);
//             if(data){
//                 res.render('index',{
//                     title:'搜索结果',
//                     page:'searchdata',
//                     item:data,
//                     username:name
//                 })
//             }
//         }).catch(function(err){
//             console.log(err);
//         });

//     }else{
//         SearchR(data).then(function(data){
//             // console.log(data[0].id);
//             if(data){
//                 res.render('index',{
//                     title:'搜索结果',
//                     page:'searchdata',
//                     item:data,
//                     username:name
//                 })
//             }
//         }).catch(function(err){
//             console.log(err);
//         });

//     }
// })

//搜索结果
router.post('/SearchUser',function(req,res){
    var data = req.body.txt;
    var name = req.session.username;
    console.log(name,data);
    SearchUser(data).then(function(result){
        if(result){
            res.render('index',{
                title:'搜索结果',
                page:'SearchUser',
                data1:result,
                username:name
            })
        }
    }).catch(function(err){
        console.log(err);
    });
});

//编辑管理员页面
router.get('/edit',function(req,res){
    var id = req.query.id;
    var name =  req.session.username;
    res.render('index',{
        title:'信息更改',
        page:'edit',
        username:name,
        id:id,
    })
});

//增加管理员页面
router.get('/addmaster',function(req,res){
    var id = req.query.id;
    var name =  req.session.username;
    res.render('index',{
        title:'增加管理员',
        page:'addmaster',
        username:name,
        id:id,
    })
});

//增加文章页面
router.get('/addarticle',function(req,res){
    var name =  req.session.username;
    res.render('index',{
        title:'新的文章',
        page:'addarticle',
        username:name,
    })
});

//更改文章页面
router.get('/updatearticle',function(req,res){
    var id=req.query.id;
    var name =  req.session.username;

    msgArticle(id).then(function(result){
        if(result){
            console.log(result[0].sort,result[0].title,result[0].content);  

            res.render('index',{
                title:'文章更改',
                page:'updatearticle',
                username:name,
                id:id,
                sort:result[0].sort,
                head:result[0].title,
                content:result[0].content
            })       
        }
    }).catch(function(err){
        console.log(err);
    })   
    
});

//增加推荐文章页面
router.get('/rec_addarticle',function(req,res){
    var name =  req.session.username;
    console.log(1);
    res.render('index',{
        title:'新的文章',
        page:'rec_addarticle',
        username:name,
    })
});

//更改推荐文章页面
router.get('/rec_updatearticle',function(req,res){
    var id=req.query.id;
    var name =  req.session.username;
    console.log(1);
    MsgArticle(id).then(function(result){
        if(result){
            console.log(result[0].sort,result[0].title,result[0].content);  
            res.render('index',{
                title:'文章更改',
                page:'rec_updatearticle',
                username:name,
                id:id,
                sort:result[0].sort,
                head:result[0].title,
                content:result[0].content
            })       
        }
    }).catch(function(err){
        console.log(err);
    })   
    
});

//添加管理员
router.post('/addmaster',function(req,res){
    var name = req.body.name;
    var pwd = req.body.pwd;
    var md5 = crypto.createHash('md5'); 
    var pwd = md5.update(pwd).digest('hex');

    addMaster(name,pwd).then(function(data){
        if(data){
            console.log('增加成功');
            res.redirect('/admin/master');
        }
    }).catch(function(err){
        console.log(err);
    })
});


//更改管理员
router.post('/edit',function(req,res){
    var id = req.body.id;
    var name = req.body.name;
    var pwd = req.body.pwd;
    var md5 = crypto.createHash('md5'); 
    var pwd = md5.update(pwd).digest('hex');

    updateMaster(name,pwd,id).then(function(data){
        if(data){
            console.log('修改成功');
            res.redirect('/admin/master');
        }
    }).catch(function(err){
        console.log(err);
    })
    
});


//删除管理员
router.post('/delMaster',function(req,res){
    var id = req.body['d_master'];

    delMaster(id).then(function(data){
        if(data){
            console.log('删除成功');
            res.redirect('/admin/master');
        }
    }).catch(function(err){
        console.log(err);
    })
});



//删除招聘注册用户
// router.post('/delUser_recruit',function(req,res){
//     var id = req.body['r_user'];

//     delUser_recruit(id).then(function(data){
//         if(data){
//             console.log('删除成功');
//             res.redirect('/admin/users');
//         }
//     }).catch(function(err){
//         console.log(err);
//     })
// });

//删除求职注册用户
router.post('/delUser_seeker',function(req,res){
    var id = req.body['s_user'];

    delUser_seeker(id).then(function(data){
        if(data){
            console.log('删除成功');
            res.redirect('/admin/users');
        }
    }).catch(function(err){
        console.log(err);
    })
});

//删除反馈信息

router.post('/delFeedback',function(req,res){
    var Uid = req.body['d_feed'];

    delFeedback(Uid).then(function(result){
        if(result){
            console.log('删除成功');
            res.redirect('/admin/msg');
        }
    }).catch(function(err){
        console.log(err);
    })

});

//删除求职详情
router.post('/delMsg_seeker',function(req,res){
    var id = req.body['d_msg_s'];

    delMsg_seeker(id).then(function(data){
        if(data){
            console.log('删除成功');
            res.redirect('/admin/detail');
        }
    }).catch(function(err){
        console.log(err);
    })

})
//删除招聘详情
// router.post('/delMsg_recruit',function(req,res){
//     var id = req.body['d_msg_r'];

//     delMsg_recruit(id).then(function(data){
//         if(data){
//             console.log('删除成功');
//             res.redirect('/admin/detail');
//         }
//     }).catch(function(err){
//         console.log(err);
//     })

// })
//增加文章
router.post('/addArticle',function(req,res){
    var Uid = req.body.Uid;
    var author = req.body.author;
    var date = req.body.date;
    var sort = req.body.sort;
    var title = req.body.title;
    var content = req.body.content;
    // console.log(sort,title,content);
    addArticle({Uid:Uid,author:author,date:date,sort:sort,title:title,content:content}).then(function(data){
        if(data){
            console.log('增加成功');
            res.redirect('/admin/article');
        }
    }).catch(function(err){
        console.log(err);
    })
})

//更改文章
router.post('/updateArticle',function(req,res){
    var id = req.body.id;
    var sort = req.body.sort;
    var title = req.body.title;
    var content = req.body.content;
    console.log(id,sort,title,content);

    updateArticle({id:id,sort:sort,title:title,content:content}).then(function(data){
        if(data){
            console.log('更改成功');
            res.redirect('/admin/article');
        }
    }).catch(function(err){
        console.log(err);
    })
})
//删除文章
router.post('/delArticle',function(req,res){
    var id = req.body.d_article;
    console.log(id);
    delArticle(id).then(function(data){
        if(data){
            console.log('删除成功');
            res.redirect('/admin/article');
        }
    }).catch(function(err){
        console.log(err);
    })
})

//增加推荐文章
router.post('/rec_addArticle',function(req,res){
    var author = req.body.author;
    var date = req.body.date;
    var sort = req.body.sort;
    var title = req.body.title;
    var content = req.body.content;
    // console.log(sort,title,content);
    AddArticle({author:author,date:date,sort:sort,title:title,content:content}).then(function(data){
        if(data){
            console.log('增加成功');
            res.redirect('/admin/recommend');
        }
    }).catch(function(err){
        console.log(err);
    })
})

//更改推荐文章
router.post('/rec_updateArticle',function(req,res){
    var id = req.body.id;
    var sort = req.body.sort;
    var title = req.body.title;
    var content = req.body.content;
    console.log(id,sort,title,content);

    UpdateArticle({id:id,sort:sort,title:title,content:content}).then(function(data){
        if(data){
            console.log('更改成功');
            res.redirect('/admin/recommend');
        }
    }).catch(function(err){
        console.log(err);
    })
})
//删除推荐文章
router.post('/rec_delArticle',function(req,res){
    var id = req.body.d_article;
    console.log(id);
    DelArticle(id).then(function(data){
        if(data){
            console.log('删除成功');
            res.redirect('/admin/recommend');
        }
    }).catch(function(err){
        console.log(err);
    })
})




module.exports = router;