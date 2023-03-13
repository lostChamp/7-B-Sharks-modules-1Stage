import {pool as db} from "../db/db.js";

export class filmController {
    async createFilm(req, res) {
        const {name, year} = JSON.parse(req.body);
        const newFilm = await db.query(`INSERT INTO film (film_name, year) values ($1, $2) RETURNING *`, [name, year]);

        console.log(newFilm.rows[0]);
    }

    async getFilms(req, res) {
        const films = await db.query(`SELECT * FROM film`);

        console.log(films.rows);
    }

    async getOneFilm(req, res) {
        const splitUrl = req.url.split("/");
        const takeLastInUrl = splitUrl[splitUrl.length - 1].split(":");
        const id = Number(takeLastInUrl[takeLastInUrl.length - 1]);

        const films = await db.query(`SELECT * FROM film WHERE id = $1`, [id]);

        console.log(films.rows);
    }

    async updateFilm(req, res) {

    }

    async deleteFilm(req, res) {

    }
}