import app from "../../src/app";

const request = require("supertest");

let id;
let token;

// TODO: Mock Tests

describe("AUTHENTICATION AND RESOURCES CONSUME", () => {
    it("CREATE an User ", async () => {
        const response = await request(app)
            .post("/users")
            .send({
                name: "Test User",
                email: "test@supremeapi.com.br",
                password: "12345678",
                passwordConfirmation: "12345678",
            })
            .expect(201);
        id = response.body.id;
    });

    it("CREATE Session", async () => {
        const response = await request(app)
            .post("/sessions")
            .send({
                email: "test@supremeapi.com.br",
                password: "12345678",
            })
            .expect(200);
        expect(response.body).toHaveProperty("token");

        token = response.body.token;
    });

    it("GET all users resource", async () =>
        request(app)
            .get("/users")
            .set("Authorization", `Bearer ${token}`)
            .expect(200));

    it("GET all customers resource", async () =>
        request(app)
            .get("/customers")
            .set("Authorization", `Bearer ${token}`)
            .expect(200));

    it("DESTROY the user created", () =>
        request(app)
            .delete(`/users/${id}`)
            .set("Authorization", `Bearer ${token}`)
            .expect(200));
});
