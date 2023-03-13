export class filmController {
    createFilm(req, res) {
        const {name, surname} = JSON.parse(req.body);
        console.log(name, surname);
    }

    getFilms() {

    }

    getOneFilm() {

    }

    updateFilm() {

    }

    deleteFilm() {

    }
}