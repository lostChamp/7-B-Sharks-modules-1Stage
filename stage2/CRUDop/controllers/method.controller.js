import {filmController} from "./film.contoroller.js";
import {genreController} from "./genre.contorller.js";

const films = new filmController();
const genre = new genreController();
export function forController(reqMethodAndUrl) {
    switch (reqMethodAndUrl.method) {
        case 'GET':
            if(reqMethodAndUrl.url === "/film") {
                films.getFilms(reqMethodAndUrl);
            }else if(reqMethodAndUrl === "/film:id") {
                films.getOneFilm(reqMethodAndUrl);
            }else if(reqMethodAndUrl.url === "/genre") {
                genre.getGenres(reqMethodAndUrl);
            }else if(reqMethodAndUrl.url === "/genre:id") {
                genre.getOneGenre(reqMethodAndUrl);
            }
            break;
        case 'POST':
            if(reqMethodAndUrl.url === "/film") {
                films.createFilm(reqMethodAndUrl);
            }else if(reqMethodAndUrl.url === "/genre") {
                genre.createGenre(reqMethodAndUrl);
            }
            break;
        case 'PUT':
            if(reqMethodAndUrl.url === "/film") {
                films.updateFilm(reqMethodAndUrl);
            }else if(reqMethodAndUrl.url === "/genre") {
                genre.updateGenre(reqMethodAndUrl);
            }
            break;
        case 'DELETE':
            if(reqMethodAndUrl.url === "/film") {
                films.deleteFilm(reqMethodAndUrl);
            }else if(reqMethodAndUrl.url === "/genre") {
                genre.deleteGenre(reqMethodAndUrl);
            }
            break;
    }
}