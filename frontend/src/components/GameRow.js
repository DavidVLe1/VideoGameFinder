

function GameRow({game}){
    const genreNames = game.genres.map((genre) => genre.name).join(', ');
    const platformNames = game.platforms.map((platformGroup) => platformGroup.platform.name).join(', ');
    const esrbRating = game.esrb_rating ? game.esrb_rating.name : 'N/A';
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
                {esrbRating}
            </td>
            <td>
            <img src={game.background_image} alt={game.name} style={{ width: '500px', height: '250px' }}></img>
            </td>
        </tr>
    )
}

export default GameRow;