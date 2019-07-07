'use strict';
const express = require('express');
const pg = require('pg');
//const requireDir = require('require-dir');


const app = express();

app.use(express.json());
/*const config = {
    user: 'tholhakk',
    database: 'nodeapi',
    password: 'thol18',
    port: 5432
};

const pool = new pg.Pool(config); 
requireDir(".src/models/");
*/

app.use('/api',require('./src/routes'));

app.listen(3001);