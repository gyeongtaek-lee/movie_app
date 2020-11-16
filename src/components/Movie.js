import React from "react";
import PropTypes from "prop-types";
import App_Movie from "../App_Movie";
import { Link } from "react-router-dom";

function Movie({id, year, title, summary, poster, genres}) {

    console.log(id);

    return (
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
                year,
                title,
                summary,
                poster
            }
        }} >
            <div>
                <h4 style={{backgroundColor: "red"}}>{title}</h4>
                <ul>
                    {genres.map(genre => (
                        <li key={id} className="genres__genre">{genre}</li>
                    ))}
                </ul>
            </div>
        </Link>
    )

}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;