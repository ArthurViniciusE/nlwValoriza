import express, { response } from "express"; 

//@types/express
const app = express();

/**
 * GET    => Buscar uma informação;
 * POST   => Inserir(criar) uma informação;
 * PUT    => Alterar uma informação;
 * DELETE => Deletar uma informação;
 * PATCH  => Alterar uma informação esspecífica;
 */


app.get("/test",(request,response) => {
    // Request => entrando
    // Response => saindo

    return response.send("Olá NLW")
} );

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW método POST")
});

// http://localhost:3000
app.listen(3000,() => console.log("Server is running"));
