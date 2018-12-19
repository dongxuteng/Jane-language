
module.exports = {
    name:'jane',

    pool:{
        host     : 'localhost',
        user     : 'root',
        password : 'dxt980927',
        database : 'jane'
    },

    
    User:function User(user){
        this.username = user.username;
        this.userpass = user.userpass;
    }
}
