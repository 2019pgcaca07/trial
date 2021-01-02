const express = require('express');
const app = express();
const port = 2000;
app.use('/',require('./routes'));





app.listen(port,function(err){
    if(err){
        console.log(`error in runnig server is ${err}`);
    }
    console.log(`server is running om port ${port}`);
});