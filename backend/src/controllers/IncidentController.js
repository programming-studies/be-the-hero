const databaseConnection = require("../database/connection");
const tableName = 'incidents';

module.exports = {
    index: async (request, response) => {
        const { page = 1 } = request.query;
        const [ count ] = await databaseConnection(tableName).count();
        const ongTableName = 'ongs';
        response.header('X-Total-Count', count['count(*)']);
        const incidents = await databaseConnection(tableName)
            .select([
                `${tableName}.*`,
                `${ongTableName}.name`,
                `${ongTableName}.email`,
                `${ongTableName}.whatsapp`,
                `${ongTableName}.city`,
                `${ongTableName}.uf`,
            ])
            .limit(5)
            .offset((page - 1) * 5)
            .join(ongTableName, `${ongTableName}.id`, '=', `${tableName}.ong_id`);
        response.json(incidents);
    },
    list: async (request, response) => {
        const { id } = request.params;
        return response.json(await databaseConnection(tableName).select('*').where('ong_id', id));
    },
    store: async (request, response) => {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;
        const [ id ] = await databaseConnection(tableName).insert({ title, description, value, ong_id });
        return response.json({ id });
    },
    delete: async (request, response) => {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incident = await databaseConnection(tableName).select('ong_id').where('id', id).first();
        if (incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }
        await databaseConnection(tableName).where('id', id).delete();
        return response.status(204).send();
    },
}