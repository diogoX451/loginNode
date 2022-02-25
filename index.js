const express = require('express');
const session  = require('express-session');
const bodyParser = require('body-parser');

const port = 3333;
const path = require('path');
const app  = express();
// variaveis de teste
var login = "diogX451"
var password = "321"
// Segredo da chave
app.use(session({secret:'skndoska64ddas46d4d4'}));
//rederização 
app.use('/css',express.static('css'));
app.use(bodyParser.urlencoded({extended:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname,'/views'));

// rota da pasta Views
app.post('/', (req,res)=> {
    if(req.body.password == password && req.body.user == login){
        //confirmação de login
        req.session.user = login;
        res.render('logado'); 
        console.log(req.body.user);
    }else {
        res.render('index'); 
    } 
});
// rota do get

app.get('/', (req, res)=>{
    if(req.session.login){
        res.render('logado');
    }else { 
        res.render('index');
    }
});

app.listen(port, ()=>{
    console.log('OK');
});
