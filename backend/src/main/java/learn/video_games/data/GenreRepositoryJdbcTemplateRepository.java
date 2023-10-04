package learn.video_games.data;

import learn.video_games.data.mappers.GenreMapper;
import learn.video_games.models.Genre;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class GenreRepositoryJdbcTemplateRepository implements GenreRepository {

    private final JdbcTemplate jdbcTemplate;

    public GenreRepositoryJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Genre> findAll() {
        final String sql = "select genre_id, genre_name "
                + "from genre limit 1000;";
        return jdbcTemplate.query(sql, new GenreMapper());
    }

    @Override
    @Transactional
    public Genre findById(int genreId) {

        final String sql = "select genre_id, genre_name "
                + "from genre "
                + "where genre_id = ?;";

        return jdbcTemplate.query(sql, new GenreMapper(), genreId).stream()
                .findFirst().orElse(null);

    }
}
