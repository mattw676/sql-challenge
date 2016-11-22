var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var blogPosts = require('./routes/blogPosts');
var app = express();

var connection  = require('express-myconnection');
var mysql = require('mysql');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    connection(mysql,{
        host: 'localhost',
        user: 'root',
        password : 'root',
        port : 3306,
        database:'nodejs'
    })
);

app.get('/', routes.index);
app.get('/blogPosts', blogPosts.list);
app.get('/blogPosts/add', blogPosts.add);
app.post('/blogPosts/add', blogPosts.save);
app.get('/blogPosts/delete/:id', blogPosts.delete_blogPost);
app.get('/blogPosts/edit/:id', blogPosts.edit);
app.post('/blogPosts/edit/:id',blogPosts.save_edit);

app.use(app.router);

http.createServer(app).listen(8080, function(){
  console.log('Express server listening on port 8080');
});
