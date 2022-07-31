// Importation
// --

const { connection } = require("../database/init");


// Exportation
// --

exports.create = async (req, res, next) => {
    const { http_code, tag, message } = req.body;
    
    if (http_code == undefined || tag == undefined || message == undefined)
        return res.json("Des informations sont manquantes dans le body");

    connection.query(`INSERT INTO \`apologies\` (\`http_code\`, \`tag\`, \`message\`) VALUES ("${http_code}", "${tag}", "${message}")`, (error, results, fields) => {
        if (error) throw error;
        return res.json({
            affectedRows: results.affectedRows
        });
    });
}