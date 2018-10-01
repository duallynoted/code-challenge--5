//requires
const express = require('express');
app = express();
const bodyParser = require('body-parser');
const messagesRouter = require('./routes/messages-router')

//globals
const PORT = process.env.PORT || 5000;

//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/messages', messagesRouter)

//spins
app.listen(PORT, () => {
    console.log('SERVER UP AND RUNNING ON PORT: ', PORT);    
});