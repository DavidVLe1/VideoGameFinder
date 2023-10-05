package learn.video_games.data;

import learn.video_games.data.mappers.GenreMapper;
import learn.video_games.data.mappers.PlatformMapper;
import learn.video_games.models.Genre;
import learn.video_games.models.Platform;
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
public class PlatformRepositoryJdbcTemplateRepository implements PlatformRepository {

    private final JdbcTemplate jdbcTemplate;

    public PlatformRepositoryJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Platform> findAll() {
        final String sql = "select platform_id, platform_name "
                + "from platform limit 1000;";
        return jdbcTemplate.query(sql, new PlatformMapper());
    }

    @Override
    @Transactional
    public Platform findById(int platformId) {

        final String sql = "select platform_id, platform_name "
                + "from platform "
                + "where platform_id = ?;";

        return jdbcTemplate.query(sql, new PlatformMapper(), platformId).stream()
                .findFirst().orElse(null);

    }
}
