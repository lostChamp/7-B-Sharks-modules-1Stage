export class genreController {
    createGenre(req, res) {
        const {name, surname} = JSON.parse(req.body);
        console.log(name, surname);
    }

    getGenres() {

    }

    getOneGenre() {

    }

    updateGenre() {

    }

    deleteGenre() {

    }
}