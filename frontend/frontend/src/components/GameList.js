import { useEffect, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TableHead from "./TableHead";
import GameRow from "./GameRow";

export default function GameList() {//{ preferences }
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_GAME_FINDER_API_KEY}`)
    //         .then(res => {
    //             if (res.ok) {
    //                 return res.json();
    //             } else if (res.status >= 500) {
    //                 return res
    //                     .json()
    //                     .then(error =>
    //                         Promise.reject(new Error(error.message))
    //                     );
    //             } else {
    //                 // All other errors
    //                 return Promise.reject(
    //                     new Error(`Unexpected status code ${res.status}`)
    //                 );
    //             }
    //         })
    //         .then(data => {
    //             setGames(data);
    //         })
    //         .catch(error => {
    //              console.error(error); // Log for debugging
    //         });
    // }, []);


    return (
        <>
            <div>
                <h1>List/table of game data</h1>
                <table>
                <TableHead
					headers={['Name', 'Platforms', 'Genres', 'Release Date', 'MetaCritic Rating', 'ESRB Rating']}
				/>
                    <tbody>
                        <tr>
                        <td>Pokemon</td>
                        <td>Switch</td>
                        <td>Fantasy</td>
                        <td>2023</td>
                        <td>99</td>
                        <td>E</td>
                        </tr>
                        {/* {games.map(game=>(
                            <GameRow game={game} key={game.id}/>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </>
    );
}
