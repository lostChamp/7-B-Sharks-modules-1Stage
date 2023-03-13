import http from "http";

switch (req.url) {
    case "/genre/get":
        res.write("genre/get");
        break;
    case "/genre/post":
        res.write("genre/post");
        break;
    case "/genre/put":
        res.write("genre/put");
        break;
    case "/genre/delete":
        res.write("genre/delete");
        break;
    case "/film/get":
        let reqBody = req.body;
        let str = String(reqBody);
        console.log(JSON.parse(str));
        res.write("film/get");
        break;
    case "/film/post":
        res.write("film/post");
        break;
    case "/film/put":
        res.write("film/put");
        break;
    case "/film/delete":
        res.write("film/delete");
        break;
    default:
        res.write("Enter one of the CRUD operations in the url request");
        break;
}

const server = http.createServer((req, res) => {
    res.end();
});

server.get("/get", (req, res) => {
    console.log("da");
});

//POST на createFil
//GET на получение одного и всех фильмов
//PUT для updateFilm
//DELETE для удаления фильма