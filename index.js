const express = require('express');
const cors = require('cors');
const app = express();
const middleware =(req, res, next)=>{
    if(!req.query.name){
        res.send(" <h1>Enter Your Name and see magic </h1>")
    }

    else if(req.query.name == "sarovar"){
        res.send(" <h1>I am MERN Developer </h1>")
    }

    else{
        next()
    }

    

}
app.use(middleware);
app.use(cors());
app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })

app.get('/', (req, res) =>{
    res.send(" <h1>I am Home Page </h1>")
})

app.get('/about', (req, res) =>{
    res.send(" <h1>I am About Page </h1>")
})
app.get('/*', (req, res) =>{
    res.send(" <h1> Error 404 page Not found ! </h1>")
})

app.listen(3010)