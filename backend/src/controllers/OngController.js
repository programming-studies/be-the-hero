const databaseConnection = require("../database/connection");
const generateUniqueId = require("../utils/generateUniqueId");
const tableName = "ongs";

module.exports = {
  index: async(request, response) => response.json(await databaseConnection(tableName).select('*')),
  store: async (request, response) => {
    const { id = generateUniqueId(), name, email, whatsapp, city, uf } = request.body;
    await databaseConnection(tableName).insert({ id, name, email, whatsapp, city, uf });
    return response.json({ id });
  }
}