const crypto = require("crypto");
const databaseConnection = require("../database/connection");
const tableName = 'incidents';

module.exports = {
    index: async(request, response) => response.json(await databaseConnection(tableName).select('*')),
    store: async (request, response) => {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;
        const [ id ] = await databaseConnection(tableName).insert({ title, description, value, ong_id });
        return response.json({ id });
    }
}