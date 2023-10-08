import TableHead from "./TableHead";
import GameRow from "./GameRow";
export default function DisplayResults({gamesData}){
    return (
        <>
            <div>
                <h1>Your List of Video Game Preferences</h1>
                {gamesData.length === 0 ? (
                    <p>No games found. Please fill out the Form.</p>
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