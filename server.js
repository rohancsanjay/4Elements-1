const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();
const IP = '127.0.0.1';
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'app/public')));


app.listen(PORT, () => {
  console.log(`Listening on ${IP}:${PORT}`);
});