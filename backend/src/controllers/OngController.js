const crypto = require("crypto");
const databaseConnection = require("../database/connection");

module.exports = {
    list: async(request, response) => response.json(await databaseConnection('ongs').select('*')),
    store: async (request, response) => {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX'); // gera 4 bytes e converte em string hexadecimal
        await databaseConnection('ongs').insert({ id, name, email, whatsapp, city, uf });
        return response.json({ id });
    }
}