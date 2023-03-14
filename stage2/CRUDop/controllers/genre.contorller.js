import {pool as db} from "../db/db.js";

export class genreController {
    async createGenre(req, res) {
        const {name_genre, film_id} = JSON.parse(req.body);

        const newGenre = await db.query(`INSERT INTO genre (name_genre, film_id) values ($1, $2) RETURNING *`, [name_genre, film_id]);

        console.log(newGenre.rows);
    }

    async getGenresByFilm(req, res) {
        const {film_id} = JSON.parse(req.body);

        const genres = await db.query(`SELECT * FROM genre WHERE film_id = $1`, [film_id]);

        console.log(genres.rows);
    }
}