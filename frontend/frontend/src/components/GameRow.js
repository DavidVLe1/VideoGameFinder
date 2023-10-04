

function GameRow({game}){
    return(
        <tr>
            <td>
                {game.name}
            </td>
            <td>
                {game.genres}
            </td>
        </tr>
    )
}

export default GameRow;