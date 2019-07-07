const pg = require('pg');

const config = {
    user: 'tholhakk',
    database: 'nodeapi',
    password: 'thol18',
    port: 5432
};

const createConnection = ()=>{
    return pool = new pg.Pool(config);
}
module.exports = {
    createConnection,
}