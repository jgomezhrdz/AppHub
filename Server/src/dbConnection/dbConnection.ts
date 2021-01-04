import mysql from 'promise-mysql';

import dbConnectionParams from './dbConnectionParams';

const pool = mysql.createPool(dbConnectionParams.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection)
        console.log("connected to DB")
    });

export default pool;