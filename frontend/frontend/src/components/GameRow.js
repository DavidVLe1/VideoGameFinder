

function GameRow({game}){
    const genreNames = game.genres.map((genre) => genre.name).join(', ');
    const platformNames = game.platforms.map((platformGroup) => platformGroup.platform.name).join(', ');
    // console.log(game.platform);
    return(
        <tr>
            <td>
                {game.name}
            </td>
            <td>
                {platformNames}
            </td>
            <td>
                {genreNames}
            </td>
            <td>
                {game.released}
            </td>
            <td>
                {game.metacritic}
            </td>
            <td>
                {game.esrb_rating.name}
            </td>
        </tr>
    )
}

export default GameRow;