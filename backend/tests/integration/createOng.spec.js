const request = require("supertest");
const app = require("../../src/app");
const databaseConnection = require("../../src/database/connection");

describe("Create Ong", () => {
  beforeEach(async () => {
    // apaga as tebelas do banco
    await databaseConnection.migrate.rollback();
    // executa as migrations para construir as tabelas
    await databaseConnection.migrate.latest();
  });
  afterAll(async () => {
    // destroi a conexão com o banco depois dos testes
    await databaseConnection.destroy();
  });
  it("Should create an ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "APAD Test",
        email: "contato.test@apad.com.br",
        whatsapp: "47000000000",
        city: "Rio do Sul",
        uf: "SC",
      });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    console.log(count);
  });
});
