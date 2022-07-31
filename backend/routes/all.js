// Importation
// --

const { connection } = require("../database/init");


// Exportation
// --

exports.all = async (req, res, next) => {
    connection.query(`SELECT * FROM apologies`, (error, results, fields) => {
        if (error) throw error;
        return res.json(results);
    });
}