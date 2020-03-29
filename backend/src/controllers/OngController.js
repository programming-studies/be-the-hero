const crypto = require("crypto");
const databaseConnection = require("../database/connection");
const tableName = 'ongs';

module.exports = {
    index: async(request, response) => response.json(await databaseConnection(tableName).select('*')),
    store: async (request, response) => {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX'); // gera 4 bytes e converte em string hexadecimal
        await databaseConnection(tableName).insert({ id, name, email, whatsapp, city, uf });
        return response.json({ id });
    }
}