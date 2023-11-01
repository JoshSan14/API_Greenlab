const express = require('express');
const bodyParser = require('body-parser')
const { Pool } = require('pg')
const cors = require('cors')
const moment = require('moment')

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'database',
    password: '1234',
    port: 5432
})