package learn.video_games.data;

import learn.video_games.data.mappers.PreferenceMapper;
import learn.video_games.models.Genre;
import learn.video_games.models.Platform;
import learn.video_games.models.Preferences;
import learn.video_games.models.Preference;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@Repository
public class PreferencesRepositoryJdbcTemplateRepository implements PreferencesRepository {
    private final JdbcTemplate jdbcTemplate;

    public PreferencesRepositoryJdbcTemplateRepository (JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public boolean add(Preferences preferences) {
        int number_of_rows = 0;
        for (String genre: preferences.getGenres()) {
            for (String platform: preferences.getPlatforms()) {
                final String sql = "insert into preferences (user_id, genre, platform, start_date, end_date, min_score, max_score) "
                        + " values (?,?,?,?,?,?,?);";

                KeyHolder keyHolder = new GeneratedKeyHolder();
                int rowsAffected = jdbcTemplate.update(connection -> {
                    PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                    ps.setInt(1, preferences.getUserId());
                    ps.setString(2, genre);
                    ps.setString(3, platform);
                    ps.setString(4, preferences.getStartDate().toString());
                    ps.setString(5, preferences.getEndDate().toString());
                    ps.setInt(6, preferences.getMinMetaCritic());
                    ps.setInt(7, preferences.getMaxMetaCritic());
                    return ps;
                }, keyHolder);

               number_of_rows++;
            }

        }
        if (number_of_rows <= 0) {
            return false;
        }
        return true;

    }

    @Override
    public List<Preference> queryAll(int userId) {
        final String sql = "select preference_id, user_id, genre, platform, start_date, end_date, min_score, max_score"
                + " from preferences where user_id = ?;";
        return jdbcTemplate.query(sql, new PreferenceMapper(), userId);
    }


    @Override
    @Transactional
    public boolean deleteByUser(int userId) {
        return jdbcTemplate.update("delete from preferences where user_id = ?;", userId) > 0;
    }

}
