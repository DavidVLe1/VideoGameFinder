import { useEffect, useState } from "react";
import TableHead from "./TableHead";
import GameRow from "./GameRow";
import { useLocation } from "react-router-dom";

export default function GameList({gamesData, handleGamesData}) {//{ preferences }
    const apiKey = process.env.REACT_APP_GAME_FINDER_API_KEY;
    const { state } = useLocation();
    const formData = state?.formData || {};
    // console.log("This is the game Data: ", formData);

    function formatDate(dateString) {
        const date = new Date(dateString);
        date.setUTCHours(0, 0, 0, 0); // Set the time to midnight UTC
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function buildQueryString(formData) {
        let queryParams = "";

        if (!formData) {
            return apiKey;
        }

        if (formData.startDate && formData.endDate) {
            const startDateFormatted = formatDate(formData.startDate);
            const endDateFormatted = formatDate(formData.endDate);
            queryParams += `&dates=${startDateFormatted},${endDateFormatted}`;
        }

        if (formData.minMetaCritic>=0 && formData.maxMetaCritic) {
            queryParams += `&metacritic=${formData.minMetaCritic},${formData.maxMetaCritic}`;
        }

        if (formData.genres) { //still registering as action for some reason.
            queryParams += `&genres=${formData.genres}`;
        }

        if (formData.platforms) {
            queryParams += `&platforms=${formData.platforms}`;
        }

        return queryParams;
    }

    const queryParamString = buildQueryString(formData);
    const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}${queryParamString}`
    console.log("apiUrl is: ", apiUrl);

    useEffect(() => {
        fetch(apiUrl)
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
                handleGamesData(data.results);
            })
            .catch(error => {
                console.error(error); // Log for debugging
            });
    }, []);
    //  console.log(games);

    return (
        <>
            <div>
                <h1>List/table of game data</h1>
                {gamesData.length === 0 ? (
                    <p>No games found under the specified criteria.</p>
                ) : (
                    <table>
                        <TableHead
                            headers={['Name', 'Platforms', 'Genres', 'Release Date', 'MetaCritic Rating', 'ESRB Rating', 'Image']}
                        />
                        <tbody>
                            {gamesData.map((game) => (
                                <GameRow
                                    key={game.id}
                                    game={game}
                                />
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}
