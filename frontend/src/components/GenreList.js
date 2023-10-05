import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GenreList({handleChange}) {
    const [genres, setGenres] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/api/genre')
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else if (res.status >= 500) {
                    return res
                        .json()
                        .then(error =>
                            Promise.reject(new Error(error.message))
                        );
                } else {
                    // All other errors
                    return Promise.reject(
                        new Error(`Unexpected status code ${res.status}`)
                    );
                }
            })
            .then(data => {
                setGenres(data);
            })
            .catch(error => {
                // console.error(error); // Log for debugging
                navigate('/error', { state: { error } });
            });
    }, []); // This happens every time the component is mounted
    // console.log(genres);
    return (
        <>
            <label htmlFor="genre" className="form-label">
                Genres
            </label>
            <select
                name="genres"
                id="genres"
                onChange={handleChange}
                className="form-select">
                <option value='' disabled>
                    [Select Genres]
                </option>
                {genres.map(genre => (
                    <option value={genre.genreId} key={genre.genreId}>
                        {genre.genreName}
                    </option>
                ))}
            </select>
        </>
    );
}