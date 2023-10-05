import { useEffect, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TableHead from "./TableHead";
import GameRow from "./GameRow";
import GameForm from "./GameForm";
import { useLocation } from "react-router-dom";

export default function GameList() {//{ preferences }
    const apiKey = process.env.REACT_APP_GAME_FINDER_API_KEY;
    const [games, setGames] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
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
                setGames(data.results);
            })
            .catch(error => {
                console.error(error); // Log for debugging
            });
    }, []);
    // console.log(games);

    return (
        <>

            <div>
                <h1>List/table of game data</h1>
                <table>
                    <TableHead
                        headers={['Name', 'Platforms', 'Genres', 'Release Date', 'MetaCritic Rating', 'ESRB Rating']}
                    />
                    <tbody>
                        {games.map((game) => (
                            <GameRow
                                key={game.id}
                                game={game} // Pass the whole game object to the GameRow component
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
