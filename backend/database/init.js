// Importation
// --

const mysql = require('mysql');


// Exportation
// --

exports.connection = mysql.createConnection({
    host     : process.env.host,
    user     : process.env.user,
    password : process.env.password,
    database : process.env.database
});