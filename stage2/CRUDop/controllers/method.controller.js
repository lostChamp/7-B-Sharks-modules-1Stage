import {filmController} from "./film.contoroller.js";
import {genreController} from "./genre.contorller.js";

const films = new filmController();
const genre = new genreController();
export function forController(reqMethodAndUrl) {
    switch (reqMethodAndUrl.method) {
        case 'GET':
            if(reqMethodAndUrl.url === "/film") {
                films.getFilms(reqMethodAndUrl);
            }else if(/\/film:\d/.test(reqMethodAndUrl.url)) {
                films.getOneFilm(reqMethodAndUrl);
            }else if(reqMethodAndUrl.url === "/genre") {
                genre.getGenresByFilm(reqMethodAndUrl);
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
            }
            break;
        case 'DELETE':
            if(/\/film:\d/.test(reqMethodAndUrl.url)) {
                films.deleteFilm(reqMethodAndUrl);
            }
            break;
        default:
            break;
    }
}