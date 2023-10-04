package learn.video_games.data.mappers;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import learn.video_games.models.Genre;

public class GenreMapper implements RowMapper<Genre> {

    @Override
    public Genre mapRow(ResultSet resultSet, int i) throws SQLException {
        Genre genre = new Genre();
        genre.setGenreId(resultSet.getInt("genre_id"));
        genre.setGenreName(resultSet.getString("genre_name"));
        return genre;
    }
}