const express = require('express');
const tempRoute = require('./src/tempRoutes');
const res = require('express/lib/response');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello World ");
});
app.use('/v2', tempRoute);

app.listen(port, () => console.log('app listening on port ' + port));