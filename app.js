const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const sequelize = require('./util/database');

const expressRoutes = require('./routes');

app.use(express.json());

app.use(expressRoutes);

sequelize.sync()
.then((res)=>{
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
})
