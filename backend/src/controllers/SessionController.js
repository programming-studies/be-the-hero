const databaseConnection = require('../database/connection');
const tableName = 'ongs';

module.exports = {
    store: async (request, response) => {
        const { id } = request.body;
        const ong = await databaseConnection(tableName).select('name').where('id', id).first();
        if (! ong) {
            return response.status(400).json({error: 'No ONG found with this ID'});
        }
        return response.json(ong);
    }
}